import axios from "axios";
import { useEffect, useState } from "react";

const GetIp = () => {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p className=''>Ip Address: {ip}</p>
    </div>
  );
};

export default GetIp;
