require("dotenv").config();

const useKey = () => {
  const KEY = process.env.REACT_APP_API_KEY;
  return { KEY };
};

export default useKey;
