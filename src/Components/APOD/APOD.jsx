import { useEffect } from "react";
import useAPOD from "../../Hooks/useAPOD";
import useYesterdayDate from "../../Hooks/useYesterdayDate";
import "./APOD.css";
import ShowAPODImage from "./ShowAPODImage";
/*eslint-disable react-hooks/exhaustive-deps*/

const APOD = () => {
  const { triggerAPOD, triggerAPODWithDate, response, loading } = useAPOD();
  const min = "1995-06-16";
  const max = useYesterdayDate();

  useEffect(() => {
    triggerAPOD();
  }, []);

  const triggerDateInput = () => {
    const date = document.getElementById("APODDateInput").value;
    triggerAPODWithDate(date);
  };

  return (
    <div className="APOD-Card">
      <input
        type={"date"}
        name="date"
        min={min}
        max={max}
        step="1"
        id="APODDateInput"
        onChange={triggerDateInput}
      ></input>
      <hr className="APODHr" />
      <br />
      <h1>{response.title}</h1>
      <ShowAPODImage loading={loading} response={response} />
      <p className="APOD-Text">{response.explanation}</p>
    </div>
  );
};

export default APOD;
