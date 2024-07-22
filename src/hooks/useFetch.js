import { useState, useEffect } from "react";
import prodApis from "../api/home";
import { useSelector } from "react-redux";

const useFetch = (index) => {
  const [data, setData] = useState([]);
  const sv = useSelector((state) => state.server.sv);
  const getData = async () => {
    if (sv === 4 || sv === 9 || sv === 11 || sv === 12) {
      const response = await prodApis.server_novel(sv);
      console.log("manga data", response);
      setData(response.data[index].data);
    } else {
      const response = await prodApis.server(sv);
      console.log("manga data", response);
      setData(response.data[index].data);
    }
  };

  useEffect(() => {
    getData();
  }, [sv]);
  return data;
};

export default useFetch;
