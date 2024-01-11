import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useContest from "../../Hook/useContest";
import ContestTab from "./ContestTab";
import { Helmet } from "react-helmet";
import CommonBanner from "../../Components/Shared/CommonBanner";
import bgImage from "../../assets/Images/background.jpg";

const AllContest = () => {
  const [contest, isPending] = useContest();

  const tags = [
    "all",
    "gamingContest",
    "articleWriting",
    "medicalContest",
    "businessContest",
  ];

  const initialIndex = tags.indexOf("all");
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const gamingContest = contest.filter(
    (items) => items.tags === "gamingContest"
  );
  const articleWriting = contest.filter(
    (items) => items.tags === "articleWriting"
  );
  const medicalContest = contest.filter(
    (items) => items.tags === "medicalContest"
  );
  const businessContest = contest.filter(
    (items) => items.tags === "businessContest"
  );

  return (
    <>
      <Helmet>
        <title>ContestHub | All Contest</title>
      </Helmet>
      <CommonBanner bgImage={bgImage} title={"All Contest"}></CommonBanner>

      <div className='bg-base-300 min-h-screen pt-16'>
        <div className='py-10 container mx-auto'>
          <div className=' py-5 text-center '>
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(index) => setTabIndex(index)}
            >
              <TabList className=' bg-[#009688] bg-opacity-50 py-6 rounded-md mx-4 lg:mx-0'>
                <Tab>All</Tab>
                <Tab>Gaming Contest</Tab>
                <Tab>Article Writing</Tab>
                <Tab>Medical Contest</Tab>
                <Tab>Business Contest</Tab>
              </TabList>

              <TabPanel>
                <ContestTab
                  isPending={isPending}
                  contest={contest}
                ></ContestTab>
              </TabPanel>
              <TabPanel>
                <ContestTab
                  isPending={isPending}
                  contest={gamingContest}
                ></ContestTab>
              </TabPanel>
              <TabPanel>
                <ContestTab
                  isPending={isPending}
                  contest={articleWriting}
                ></ContestTab>
              </TabPanel>
              <TabPanel>
                <ContestTab
                  isPending={isPending}
                  contest={medicalContest}
                ></ContestTab>
              </TabPanel>
              <TabPanel>
                <ContestTab
                  isPending={isPending}
                  contest={businessContest}
                ></ContestTab>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllContest;
