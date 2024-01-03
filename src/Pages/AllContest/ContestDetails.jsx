import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useUser from "../../Hook/useUser";
import Swal from "sweetalert2";
import useAuth from "../../Hook/useAuth";
import CountDown from "./countDown";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const ContestDetails = () => {
  const [users] = useUser();
  const { logOutUser } = useAuth();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const { width, height } = useWindowSize();

  const handleUserValidate = async () => {
    await logOutUser();
    navigate("/signin");
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Only User Can Registrar",
    });
  };

  const { isPending, data: contestDescription = [] } = useQuery({
    queryKey: ["contestDescription"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contest/${id}`);
      console.log(res);
      return res.data;
    },
  });

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
    winnerEmail,
    _id,
  } = contestDescription;

  const tabs = ["description", "criteria", "deadline"];

  const initialIndex = tabs.indexOf("description");
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const checkDeadline = () =>
    new Date(deadline).getTime() < new Date().getTime();

  const { data: winUser = [] } = useQuery({
    queryKey: [winnerEmail, "winUser"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${winnerEmail}`);
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>ContestHub | Contest-Details</title>
      </Helmet>
      <div className='pb-10 pt-16'>
        <img className='w-full h-96' src={banner} alt='' />
        <div className='container mx-auto  px-4 lg:px-0'>
          <img className='rounded w-40 h-40 -mt-20 ' src={image} alt='' />
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
                  <button className='bg-[#009688] px-4 lg:px-8 rounded-xl btn btn-block text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 mt-6 border-none'>
                    Registration
                  </button>
                </Link>
              ) : (
                <button
                  onClick={handleUserValidate}
                  className='bg-[#009688] px-4 lg:px-8 rounded-xl btn btn-block text-white transition duration-300 hover:bg-[#00796b] transform  active:bg-[#005a4b] active:scale-95 mt-6 border-none'
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
                <TabList className='bg-[#009688] bg-opacity-50 rounded-md py-2 text-center'>
                  <Tab>Description</Tab>
                  <Tab>Criteria</Tab>
                  <Tab>DeadLine</Tab>
                  <Tab>Winner</Tab>
                </TabList>
                <TabPanel className='px-10'>{description}</TabPanel>
                <TabPanel className='px-10'>{task}</TabPanel>
                <TabPanel className='text-center px-10'>
                  <CountDown date={deadline}></CountDown>
                </TabPanel>
                <TabPanel className='px-10'>
                  {checkDeadline() && winnerEmail.length ? (
                    <>
                      <div>
                        <Confetti width={width} height={height} />
                        <div className='flex flex-col items-center'>
                          <img
                            className='w-20 h-20 rounded-full'
                            src={winUser.image}
                          />
                          <h2 className='text-xl mr-2 font-light'>
                            Name:{winUser.name}
                          </h2>
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className='text-center py-10'>No Winner Select Yet</p>
                  )}
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
