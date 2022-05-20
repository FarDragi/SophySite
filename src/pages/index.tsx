import BaseTemplate from "../templates/BaseTemplate";
import { NextPageWithSubLayout } from "./_app";

const Home: NextPageWithSubLayout = () => {
  return <div>Foda</div>;
};

Home.getLayout = (page) => {
  return <BaseTemplate title="Home">{page}</BaseTemplate>;
};
export default Home;
