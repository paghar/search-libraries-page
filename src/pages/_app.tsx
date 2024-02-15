import "@/styles/globals.css";
import type {AppProps} from "next/app";
import Layout from "@/container/Layout";
import {SearchProvider} from "@/context/searchInfo";

export default function App({Component, pageProps}: AppProps) {
  return (
    <SearchProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SearchProvider>
    
  );  
}
