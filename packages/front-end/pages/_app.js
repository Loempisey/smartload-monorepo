import React from 'react'
import '../styles/globals.css'
import { RecoilRoot } from 'recoil'
import { AuthGuard } from '../AuthGuard'
function MyApp({ Component, pageProps }) {
  return (
    <div>
      <RecoilRoot>
        <AuthGuard>
          <Component {...pageProps} />
        </AuthGuard>
      </RecoilRoot>
    </div>
  )
}
//Protected Route



export default MyApp;


