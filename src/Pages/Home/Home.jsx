import { Helmet } from "react-helmet";
import PopularContest from "./PopularContest";
import ContestWinner from "./ContestWinner";
import BestContestCreator from "./BestContestCreator";
import Hero from "../../Components/Header/Hero/Hero";
import { useState } from "react";
import SearchResult from "./SearchResult";
import HowToSelect from "../HowToSelect/HowToSelect";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Helmet>
        <title>ContestHub | Home</title>
      </Helmet>

      <Hero setSearchValue={setSearchValue}></Hero>
      {/* <HeroSection></HeroSection> */}
      {searchValue && <SearchResult value={searchValue}></SearchResult>}
      <PopularContest></PopularContest>
      <ContestWinner></ContestWinner>
      <HowToSelect></HowToSelect>
      <BestContestCreator></BestContestCreator>
    </div>
  );
};

export default Home;
