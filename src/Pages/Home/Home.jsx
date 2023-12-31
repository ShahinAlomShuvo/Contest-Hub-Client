import { Helmet } from "react-helmet";
import PopularContest from "./PopularContest";
import ContestWinner from "./ContestWinner";
import BestContestCreator from "./BestContestCreator";
import Hero from "../../Components/Header/Hero/Hero";
import { useState } from "react";
import SearchResult from "./SearchResult";
import HowToSelect from "../HowToSelect/HowToSelect";
import HeroSection from "./HeroSection";
import TrustedBy from "./TrustedBy";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div>
      <Helmet>
        <title>ContestHub | Home</title>
      </Helmet>

      {/* <Hero setSearchValue={setSearchValue}></Hero> */}
      <HeroSection setSearchValue={setSearchValue}></HeroSection>
      {searchValue && <SearchResult value={searchValue}></SearchResult>}
      <PopularContest></PopularContest>
      <ContestWinner></ContestWinner>
      <TrustedBy></TrustedBy>
      <HowToSelect></HowToSelect>
      <BestContestCreator></BestContestCreator>
    </div>
  );
};

export default Home;
