import axios from "axios";
import { useState } from "react";
import useKey from "./useKey";

const useAPOD = () => {
  const { KEY } = useKey();
  const [response, setResponse] = useState({
    title: "loading...",
    url: "",
    explanation: "loading...",
  });
  const [loading, setLoading] = useState(true);
  const triggerAPOD = async () => {
    try {
      setLoading(true);
      const data = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=" + KEY
      );
      setResponse(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const triggerAPODWithDate = async (date) => {
    try {
      setLoading(true);

      const data = await axios.get(
        "https://api.nasa.gov/planetary/apod?api_key=" + KEY + "&date=" + date
      );
      setResponse(data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return { triggerAPOD, triggerAPODWithDate, response, loading };
};

export default useAPOD;
