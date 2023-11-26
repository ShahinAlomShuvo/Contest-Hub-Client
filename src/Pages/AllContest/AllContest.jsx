import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const AllContest = () => {
  const contest = useLoaderData();
  const tags = [
    "gamingContest",
    "articleWriting",
    "medicalContest",
    "businessContest",
  ];
  const { tag } = useParams();
  const initialIndex = tags.indexOf(tag);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <div className='py-10 container mx-auto'>
      <div className=' py-5 text-center '>
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className='text-yellow-500'>
            <Tab>SALAD</Tab>
            <Tab>PIZZA</Tab>
            <Tab>SOUPS</Tab>
            <Tab>DESSERTS</Tab>
            <Tab>DRINKS</Tab>
          </TabList>
          <TabPanel>
            <ShopTab menu={saladMenu}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab menu={pizzaMenu}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab menu={soupMenu}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab menu={dessertMenu}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab menu={drinksMenu}></ShopTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default AllContest;
