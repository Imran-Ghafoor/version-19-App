import "../components/NetflixSeries.css";
const SeriesCard = ({ curEle }) => {
  // console.log(props);
  const { name, rating, description, genre, cast, img_url, watch_url } = curEle;

  return (
    <li className="card">
      <div>
        <img src={img_url} alt="crash.jpg" width="40%" height="40%" />
        <h2>Name: {name}</h2>
        <h3>Rating: {rating}</h3>
        <p style={{ margin: "1.2rem 0" }}>Summary: {description}</p>
        <p style={{ margin: "1.2rem 0" }}>Genre: {genre}</p>
        <p style={{ margin: "1.2rem 0" }}>Cast: {cast}</p>
        <a href={watch_url} target="_blank">
          <button>Watch Now</button>
        </a>
      </div>
    </li>
  );
};
export default SeriesCard;
