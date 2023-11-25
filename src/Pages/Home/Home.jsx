import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import PopularContest from "./PopularContest";
import ContestWinner from "./ContestWinner";
import BestContestCreator from "./BestContestCreator";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const data = useLoaderData();

  return (
    <div>
      <Helmet>
        <title>ContestHub | Home</title>
      </Helmet>
      <PopularContest data={data}></PopularContest>
      <ContestWinner></ContestWinner>
      <BestContestCreator></BestContestCreator>
      <Footer></Footer>
    </div>
  );
};

export default Home;
