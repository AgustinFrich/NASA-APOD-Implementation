const useYesterdayDate = () => {
  const time = new Date().getTime();
  const yesterday = time - 24 * 60 * 60 * 1000;
  let answer = new Date(yesterday).toISOString().split("T")[0];
  return answer;
};

export default useYesterdayDate;
