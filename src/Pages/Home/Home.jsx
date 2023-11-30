import { Helmet } from "react-helmet";
import PopularContest from "./PopularContest";
import ContestWinner from "./ContestWinner";
import BestContestCreator from "./BestContestCreator";
import Hero from "../../Components/Header/Hero/Hero";
import { useState } from "react";
import SearchResult from "./SearchResult";
import HeroSection from "./HeroSection";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

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
      <BestContestCreator></BestContestCreator>
    </div>
  );
};

export default Home;
