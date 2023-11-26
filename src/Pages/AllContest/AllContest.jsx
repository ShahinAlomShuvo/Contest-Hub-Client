import { useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useContest from "../../Hook/useContest";
import ContestTab from "./ContestTab";

const AllContest = () => {
  const [contest, isPending] = useContest();
  console.log(contest);
  const tags = [
    "all",
    "gamingContest",
    "articleWriting",
    "medicalContest",
    "businessContest",
  ];
  const { tag } = useParams();
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
    <div className='bg-base-300 min-h-screen '>
      <div className='py-10 container mx-auto'>
        <div className=' py-5 text-center '>
          <Tabs
            selectedIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList className='text-yellow-500'>
              <Tab>All</Tab>
              <Tab>Gaming Contest</Tab>
              <Tab>Article Writing</Tab>
              <Tab>Medical Contest</Tab>
              <Tab>Business Contest</Tab>
            </TabList>

            <TabPanel>
              <ContestTab isPending={isPending} contest={contest}></ContestTab>
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
  );
};

export default AllContest;
