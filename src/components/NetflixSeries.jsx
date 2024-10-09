import seriesData from "../api/seriesData.json";
import SeriesCard from "./SeriesCard";
import "../components/NetflixSeries.css";
const NetflixSeries = () => {
  return (
    <ul className="grid grid-three--cols">
      {seriesData.map((curEle) => (
        <SeriesCard key={curEle.id} curEle={curEle} />
      ))}
    </ul>
  );
};
export default NetflixSeries;
