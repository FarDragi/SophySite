import Head from "next/head";
import NavBar from "../components/NavBar";
import { NextTemplate } from "./_templates";

export interface BaseTemplateProps {
  title?: string;
}

const BaseTemplate: NextTemplate<BaseTemplateProps> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.title ? props.title + " | Sophy" : "Sophy"}</title>
      </Head>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
};

export default BaseTemplate;
