import { Link } from "react-router-dom";
import { MovieType } from "../../screens/Home/components/MovieList";

type IMovie = {
  data: MovieType;
};

const Card = ({ data }: IMovie) => {
  const genre_list = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];

  function getNamesByIds() {
    const names = [];

    for (const id of data.genre_ids) {
      const object = genre_list.find((obj) => obj.id === id);
      if (object) {
        names.push(object.name);
      }
    }

    return names;
  }

  const genre = getNamesByIds();
  return (
    <Link
      to={`/movies/${data?.id}`}
      data-testid="movie-card"
      className="font-bold flex flex-col space-y-3 items-start hover:shadow-xl hover:p-2 duration-150 rounded"
    >
      <img
        src={`http://image.tmdb.org/t/p/w300/${data.poster_path}`}
        alt="movie-poster"
        data-testid="movie-poster"
        className="w-full"
      />
      <p data-testid="movie-release-date" className="text-xs text-[#9CA3AF]">
        USA, {new Date(data.release_date).getFullYear()}
      </p>
      <h1 data-testid="movie-title">{data.title}</h1>
      <div className="w-full text-xs font-normal flex items-center justify-between space-x-8">
        <div className="flex items-center space-x-2">
          <img src="/imdb.png" alt="IMDB-Logo" className="w-8 h-4" />
          <p>{data && Math.floor(data.vote_average * 10)}.0 / 100</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/tomato.png" alt="RT-Logo" className="w-4 h-4" />
          <p>{data && Math.floor(data.vote_average * 10)}%</p>
        </div>
      </div>
      <p className=" text-[#9CA3AF] text-xs">{genre.join(", ")}</p>
    </Link>
  );
};

export default Card;
