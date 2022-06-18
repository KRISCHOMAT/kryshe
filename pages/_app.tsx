import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/layout/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
