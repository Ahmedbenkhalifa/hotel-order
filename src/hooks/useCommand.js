import axios from "axios";
import { useEffect, useState } from "react";

const useCommand = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [commands, setCommands] = useState([]);
  const getAllCommands = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get("/api/hotel/getAll");
      setCommands(data);
      setIsLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllCommands();
  }, []);

  return [commands, isLoading, error];
};

export default useCommand;
