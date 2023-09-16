import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MovieType } from "../../Home/components/MovieList";
import Card from "../../../components/card/Card";

const SearchMovies = () => {
  const { search_key } = useParams();
  const [movies, setMovies] = useState<MovieType[]>();
  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault()
    axios
      .get(`https://api.themoviedb.org/3/search/movie`, {
        params: {
          api_key: "5ea3688931c339a855d1440561190697",
          // query: query != "" ? query : search_key,
          query: query,
        },
      })
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
        setMovies(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="p-9">
      <div className="flex items-center justify-between">
        <div className="block w-1/2 mb-4 px-3 py-2 border border-white rounded-md bg-[#000000]">
          <form
            onSubmit={handleSubmit}
            className="flex items-center justify-between space-x-4"
          >
            <input
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="What do you want to watch?"
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-300"
            />
            <button type="submit">
              <svg
                width="20"
                height="20"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Search">
                  <path
                    id="Icon"
                    d="M14 14L10 10M11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </button>
          </form>
        </div>
        <Link to={"/"} className="block my-10 p-2 text-center text-white font-medium rounded-lg bg-[#BE123C]">Return Home</Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-10 lg:gap-20">
        {movies?.map((m) => (
          <Card key={m.id} data={m} />
        ))}
      </div>
    </div>
  );
};

export default SearchMovies;
