import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieType } from "../../Home/components/MovieList";
import Card from "../../../components/card/Card";

const SearchMovies = () => {
  const { search_key } = useParams();
  const [movies, setMovies] = useState<MovieType[]>();

  const getMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: "5ea3688931c339a855d1440561190697",
          query: search_key,
        },
      })
      .then((response) => {
        console.log(response);
        setMovies(response.data.results)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies()
  }, [])
  return (
    <div className="p-9">
      <div className="grid grid-cols-4 gap-20">
        {movies
          ?.map((m) => (
            <Card key={m.id} data={m} />
          ))}
      </div>
      <Link to={'/'}>Return Home</Link>
    </div>
  );
};

export default SearchMovies;
