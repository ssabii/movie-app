import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movie.medium_cover_image} alt="" />
          <h2>{movie.title}</h2>
          <h2>{movie.title_long}</h2>
          <h3>rating: {movie.rating}</h3>
          <p>date uploaded: {movie.date_uploaded.split(" ")[0]}</p>
          <p>
            genre:
            {movie.genres.map((genre) => (
              <span key={genre}>{genre}</span>
            ))}
            <span>|</span>
            <span>{movie.runtime} mintues</span>
          </p>
          <p>{movie.description_full}</p>
        </div>
      )}
    </div>
  );
}

export default Detail;
