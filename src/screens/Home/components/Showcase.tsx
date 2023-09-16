import axios from "axios";
import Header from "../../../components/Header/Header";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type TopMovieType = {
  id: number;
  title: string;
  overview: string;
  backdrop_path: string;
  genre_ids: number[];
  release_date: string;
  vote_average: number;
};

const Showcase = () => {
  const [movie, setMovie] = useState<TopMovieType>();
  const maxLength = 200;
  const text = movie?.overview;

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      // Truncate the text and add ellipsis (...) at the end
      return text.slice(0, maxLength) + "...";
    }
  };

  const getMovie = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${Math.floor(
          Math.random() * 1000
        )}`,
        {
          params: {
            api_key: "5ea3688931c339a855d1440561190697",
          },
        }
      )
      .then((response) => {
        console.log(response);
        setMovie(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="relative">
      <Header />
      <div className="relative w-screen h-[600px]">
        {/* <div className="w-full"> */}
        {movie ? (
          <>
            <img
              src={
                movie &&
                `http://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
              }
              alt="backdrop image"
              className="absolute w-screen h-full object-cover object-top z-30"
            />
            {/* </div> */}
            <div className="absolute w-full h-full left-0 right-0 mx-auto px-5 lg:px-28 bg-[#00000070] flex items-center justify-start z-40">
              <div className="lg:basis-1/3 text-white flex flex-col items-start space-y-4">
                <h1 className="text-5xl font-bold">{movie?.title}</h1>
                <div className="w-full text-xs font-normal flex items-center justify-start space-x-8">
                  <div className="flex items-center space-x-2">
                    <img src="/imdb.png" alt="IMDB-Logo" className="w-8 h-4" />
                    <p>
                      {movie && Math.floor(movie.vote_average * 10)}.0 / 100
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <img src="/tomato.png" alt="RT-Logo" className="w-4 h-4" />
                    <p>{movie && Math.floor(movie.vote_average * 10)}%</p>
                  </div>
                </div>
                <p className="text-lg font-medium">
                  {text && truncateText(text, maxLength)}
                </p>
                <Link to={`/movies/${movie?.id}`} className=" flex items-center px-4 py-2 bg-[#BE123C] rounded-md">
                  <svg
                    className="me-2"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Play">
                      <path
                        id="Icon"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                        fill="white"
                      />
                    </g>
                  </svg>{" "}
                  Watch Trailer
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-black flex justify-center items-center">
            <div className="animate-spin rounded-[100%] h-32 w-32 border-t-8 border-red-500"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Showcase;
