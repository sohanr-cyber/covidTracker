import "../styles/globals.css";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="black" height={2} showOnShallow={false} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
