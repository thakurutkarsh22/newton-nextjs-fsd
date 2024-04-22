import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* NAV BAR */}

      {/* <ul>
        <li>
          <Link href="/dashboard">DashBoard</Link>
        </li>
      </ul> */}

      <Component {...pageProps} />
    </>
  );
}
