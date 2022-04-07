import "../styles/index.css";

import { SWRConfig } from "swr";
import fetchJson from "../lib/fetchJson";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((pageProps) => pageProps);

  return getLayout(
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}
