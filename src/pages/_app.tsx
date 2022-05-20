import "../styles/globals.css";
import "../styles/colors.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode, useEffect, useState } from "react";
import { DateTime } from "luxon";

export type NextPageWithSubLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithSubLayout = AppProps & {
  Component: NextPageWithSubLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithSubLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const now = DateTime.now();
  const theme = now.hour >= 18 || now.hour <= 8 ? "night" : "day";

  return <div className={theme}>{getLayout(<Component {...pageProps} />)}</div>;
}

export default MyApp;
