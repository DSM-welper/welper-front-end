import "../assets/style/global.scss";
import cookies from "next-cookies";
import client from "../lib/api/client";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = {};
  const allCookies = cookies(ctx);
  const token = allCookies["accessToken"];
  if (token !== undefined) {
    client.defaults.headers.common["Authorization"] = token;
  }

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  return {
    pageProps,
  };
};
export default MyApp;
