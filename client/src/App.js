import { useState } from "react";
import { useEffect } from "react";
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
      <h2>{data}</h2>
      <p>{data}This is you ip adress MAN</p>
    </>
  );
}

export default App;
