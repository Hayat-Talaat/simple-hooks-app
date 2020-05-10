import { useState, useEffect } from "react";
import axios from "axios";

const useResources = resourse => {
  const [resourses, setResourses] = useState([]);

  const fetchResource = async resourse => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/${resourse}`
    );
    setResourses(response.data);
  };

  useEffect(() => {
    fetchResource(resourse);
  }, [resourse]);

  return resourses;
};

export default useResources;
