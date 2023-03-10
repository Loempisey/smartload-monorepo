import axios from "axios";
// import catchErrors from "./../error/catchErrors";
import jsCookie from "js-cookie";
import { setCookie } from "nookies";

export const registerUser = async (
  users, // user object
  setError,
  setLoading
) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/signup`,
      { ...users }
    );
  } catch (error) {
    setError(error);
  }
  setLoading(false);
};

export const loginUser = async (email, password, setError, setLoading) => {
  setLoading(true);
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/signin`,
      { email, password }
    );
    console.log(res)
    if (res.data?.data.role == "user") {
      console.log("data login",res.data?.data);
      setToken(res.data?.data); 

    } else {
      setError("you are admin");
    }
  } catch (error) {
    console.log(error)
    setError(error?.response?.data?.message);
  }
  setLoading(false);
};

export const redirectUser = (ctx, location) => {
  if (ctx.req) {
    ctx.res.writeHead(302, { Location: location });
    ctx.res.end();
  } else {
    if (typeof window !== "undefined") {
      // Client-side-only code
      window.location.href = location; // router.push("/")
    }
  }
};

const setToken = (token) => {
  setCookie(null, "token_user", token);
  jsCookie.set("token_user", JSON.stringify(token));
  if (typeof window !== "undefined") {
    // Client-side-only code
    window.location.href = "/dashboard";
  }
};

export const logoutUser = () => {
  jsCookie.remove("token_user");
  window.location.href = "/";
};

