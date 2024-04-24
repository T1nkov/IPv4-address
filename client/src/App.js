import { useState } from "react";
import { useEffect } from "react";
import style from "./style.module.css";
import axios from "axios";

function App() {
  const [data, setData] = useState();

  const getIp = async () => {
    const response = await axios.get("https://api.ipify.org/?format=json");

    setData(response.data.ip);
  };

  useEffect(() => {
    getIp();
  }, []);

  return (
    <>
      <h1>{data}</h1>
      <p>{data}This is you ip adress</p>
    </>
  );
}

export default App;
