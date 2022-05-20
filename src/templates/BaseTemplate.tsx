import Head from "next/head";
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
      {props.children}
    </div>
  );
};

export default BaseTemplate;
