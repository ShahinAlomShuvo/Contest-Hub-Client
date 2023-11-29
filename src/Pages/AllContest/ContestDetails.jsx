import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useUser from "../../Hook/useUser";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import CountDown from "./countDown";
import { Helmet } from "react-helmet";

const ContestDetails = () => {
  const contest = useLoaderData();
  const [users] = useUser();
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  const handleUserValidate = async () => {
    await logOutUser();
    navigate("/signin");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only User Can Registrar",
    });
  };

  const {
    description,
    attempt_count,
    banner,
    image,
    name,
    deadline,
    tags,
    task,
    prizeMoney,
    entryFee,
    _id,
  } = contest;

  const tabs = ["description", "criteria", "deadline"];

  const initialIndex = tabs.indexOf("description");
  const [tabIndex, setTabIndex] = useState(initialIndex);
  return (
    <>
      <Helmet>
        <title>ContestHub | Contest-Details</title>
      </Helmet>
      <div className='pb-10'>
        <img className='w-full h-96' src={banner} alt='' />
        <div className='container mx-auto  px-4 lg:px-0'>
          <img className='rounded w-40 h-40 -mt-20' src={image} alt='' />
        </div>
        <div className=''>
          <div className='grid  gap-5 md:grid-cols-2 lg:grid-cols-3  pt-16 container mx-auto px-4 lg:0'>
            <div className=' space-y-2'>
              <p>
                <span className='text-xl mr-2 font-light'>Contest Name:</span>
                {name}
              </p>
              <p>
                <span className='text-xl mr-2 font-light'>Contest Prize:</span>{" "}
                ${entryFee}
              </p>
              <p>
                <span className='text-xl mr-2 font-light'>Contest tag:</span>
                {tags}{" "}
              </p>
              <p>
                <span className='text-xl mr-2 font-light'>Participants:</span>
                {attempt_count}
              </p>
              <p>
                <span className='text-xl mr-2 font-light'>Prize Money:</span>$
                {prizeMoney}{" "}
              </p>
              {users.role === "user" ? (
                <Link to={`/payment/${_id}`}>
                  <button className='btn btn-info btn-block text-white mt-4'>
                    Registration
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleUserValidate}
                  className='btn btn-info btn-block text-white mt-4'
                >
                  Registration
                </button>
              )}
            </div>
            <div className='lg:col-span-2'>
              <Tabs
                className='space-y-10'
                selectedIndex={tabIndex}
                onSelect={(index) => setTabIndex(index)}
              >
                <TabList className='bg-base-300 rounded-md py-2 text-center'>
                  <Tab>Description</Tab>
                  <Tab>Criteria</Tab>
                  <Tab>DeadLine</Tab>
                </TabList>
                <TabPanel className='px-10'>{description}</TabPanel>
                <TabPanel className='px-10'>{task}</TabPanel>
                <TabPanel className='text-center px-10'>
                  <CountDown date={deadline}></CountDown>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContestDetails;
