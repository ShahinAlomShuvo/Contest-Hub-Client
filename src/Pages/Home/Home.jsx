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
import MyTeam from "./MyTeam";
import SubscribeUs from "./SubscribeUs";
import WorldWide from "./WorldWide";

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
      <TrustedBy></TrustedBy>
      <PopularContest></PopularContest>
      <MyTeam></MyTeam>
      <ContestWinner></ContestWinner>
      {/* <HowToSelect></HowToSelect> */}
      <WorldWide></WorldWide>
      <BestContestCreator></BestContestCreator>
      <SubscribeUs></SubscribeUs>
    </div>
  );
};

export default Home;
