// import React from 'react'
// import '../styles/globals.css'
// import { RecoilRoot } from 'recoil'
// import { AuthGuard } from '../AuthGuard'
// function MyApp({ Component, pageProps }) {
//   return (
//     <div>
//       <RecoilRoot>
//         <AuthGuard>
//           <Component {...pageProps} />
//         </AuthGuard>
//       </RecoilRoot>
//     </div>
//   )
// }

// export default MyApp





import "../styles/globals.css";
import { ThemeProvider } from "@material-ui/styles";

import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { parseCookies, destroyCookie } from "nookies";
import axios from "axios";
import { redirectUser } from "./../utils/functions/auth/authUser";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";



function MyApp({ Component, pageProps, token }) {
  const router = useRouter();
  // console.log(token)
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <RecoilRoot>
        <ThemeProvider >
          
            <Component {...pageProps} />
          
        </ThemeProvider>
      </RecoilRoot>
    </LocalizationProvider>
  );
}

// Protected Route
MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  let authorize = {};
  const token = parseCookies(ctx)?.token_user;
  const protectedRoute =
    ctx.pathname === "/dashboard" ||
    ctx.pathname === "/customer" ||
    ctx.pathname === "/order" ||
    ctx.pathname === "/history" ||
    ctx.pathname === "/setting" ||
    ctx.pathname === "/about" ||
    ctx.pathname === "/post";

  if (!token) {
    protectedRoute && redirectUser(ctx, "/");
  } else {
    try {
      authorize = JSON.parse(token);
      console.log(authorize)
    } catch (error) {
      destroyCookie(ctx, "token_user");
      redirectUser("/");
    }

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/user/current_user`,
        {
          headers: {
            "x-access-token": authorize.token,
          },
        }
      );
      const user = res.data;
      // if (user) !protectedRoute && redirectUser(ctx, "/dashboard");
      pageProps.user = user;
      pageProps.token = authorize;
    } catch (error) {
      console.error(error);
      destroyCookie(ctx, "token_user");
      redirectUser("/");
    }
  }

  return { pageProps, token };
};
export default MyApp;
