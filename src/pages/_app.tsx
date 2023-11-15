import '../styles/globals.css'
import React from 'react'
import RootLayout from '../components/Layout'
import Header from "../components/Header";

interface AppProps {
  Component: React.ElementType;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RootLayout>
      {/* <WalletProvider> */}
        <Header />
        <Component {...pageProps} />
      {/* </WalletProvider> */}
    </RootLayout>
  );  
}