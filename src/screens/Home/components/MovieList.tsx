import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../../components/card/Card";

export type MovieType = {
  id: number;
  title: string;
  poster_path: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
  // imdb_id: string;
};

const MovieList = () => {
  const [movies, setMovies] = useState<MovieType[]>([]);

  const getMovies = () => {
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        params: {
          api_key: "5ea3688931c339a855d1440561190697",
        },
      })
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="w-full max-w-xs md:max-w-2xl lg:max-w-7xl mx-auto py-5 lg:py-16 mb-10 md:mb-16 lg:mb-36">
      <h1 className="text-4xl font-bold mb-11">Featured Movie</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20">
        {movies
          ?.filter((m) => movies.indexOf(m) < 10)
          .map((m) => (
            <Card key={m.id} data={m} />
          ))}
      </div>
    </div>
  );
};

export default MovieList;
