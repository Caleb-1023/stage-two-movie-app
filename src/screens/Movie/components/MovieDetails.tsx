import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import ReactPlayer from "react-player";

type Video = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};

type Results = {
  results: Video[];
};

type Genre = {
  id: number;
  name: string;
};

type Cast = {
  adult: boolean;
  cast_id: number;
  character: string;
  credit_id: string;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  order: number;
  original_name: string;
  popularity: number;
  profile_path: string;
};

type Credits = {
  cast: Cast[];
};

type MovieType = {
  title: string;
  release_date: string;
  runtime: number;
  genres: Genre[];
  credits: Credits;
  vote_average: number;
  vote_count: number;
  overview: string;
  videos: Results;
};

const MovieDetails = () => {
  const { movie_id } = useParams();
  //   console.log(typeof(movie_id))

  const [movie, setMovie] = useState<MovieType>();

  const getMovie = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movie_id}`, {
        params: {
          api_key: "5ea3688931c339a855d1440561190697",
          append_to_response: "videos,credits",
        },
      })
      .then((response) => {
        setMovie(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const round = (number: string) => {
  //   if (parseInt(number) >= 1000) {
  //     const roundNumber = Math.round(parseInt(number) / 1000);
  //     return `${roundNumber}k`;
  //   }
  //   return number;
  // };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="flex flex-col space-y-8 p-3 md:p-9">
      <div className="">
        <iframe
          className="w-full rounded-md md:rounded-3xl h-[40vh] md:h-[60vh] lg:h-[70vh] object-cover"
          src={`https://www.youtube.com/embed/${movie?.videos.results[0].key}?controls=0`}
        ></iframe>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between space-y-5 md:space-y-0 md:space-x-6">
        <div className="w-full basis-1 md:basis-2/3">
          <div className="flex flex-col lg:flex-row items-center md:items-start lg:items-center space-y-2 lg:space-y-0 lg:space-x-4 mb-6">
            <div className="flex items-center space-x-2 font-bold lg:font-medium text-xs md:text-base lg:text-xl">
              <p data-testid='movie-title'>{movie?.title}</p>
              <p>•</p>
              <p data-testid='movie-release-date'>
                {/* {new Date(JSON.stringify(movie?.release_date)).getUTCFullYear()} */}
                {/* {new Date(JSON.stringify(movie?.release_date)).toUTCString()} */}
                {movie?.release_date}
              </p>
              <p>•</p>
              {/* <p>PG-13</p>
              <p>•</p> */}
              <p data-testid='movie-runtime'>
                {movie && movie.runtime}m
              </p>
            </div>
            <div className="flex items-center space-x-3">
              {movie?.genres.map((genre) => (
                <p
                  key={genre.id}
                  className="border border-[#F8E7EB] py-2 px-4 text-sm font-semibold text-[#B91C1C] rounded-3xl"
                >
                  {genre.name}
                </p>
              ))}
            </div>
          </div>
          <div className="mb-9">
            <p data-testid='movie-overview' className="text-xl text-[#333333]">{movie?.overview}</p>
          </div>
          <div className="text-xl mb-8 flex flex-col space-y-3 lg:space-y-7">
            <p>
              Director:{" "}
              <span className="text-[#BE123C]">
                {movie?.credits.cast
                  .slice(6, 7)
                  .map((star) => star.name)
                  .join(", ")}
              </span>
            </p>
            <p>
              Writers:{" "}
              <span className="text-[#BE123C]">
                {movie?.credits.cast
                  .slice(7, 10)
                  .map((star) => star.name)
                  .join(", ")}
              </span>
            </p>
            <p>
              Stars:{" "}
              <span className="text-[#BE123C]">
                {movie?.credits.cast
                  .slice(0, 5)
                  .map((star) => star.name)
                  .join(", ")}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-between pe-6 rounded-xl border-2 border-[#C7C7C7]">
            <div className="flex items-center space-x-6 text-md md:text-xl font-semibold">
              <p className="text-white bg-[#BE123C] rounded-xl px-5 py-3">
                Top rated movie #65
              </p>
              <p className="text-[#333333]">
                Awards {Math.floor(Math.random() * 20)} nominations
              </p>
            </div>
            <img src="/arrow.png" alt="" className="w-8" />
          </div>
        </div>
        <div className="w-full basis-1 md:basis-1/3">
          <div className="flex items-center justify-end mb-6 space-x-2 font-semibold">
            <img src="/star.png" alt="" className="w-7" />
            <p className="text-2xl text-[#E8E8E8]">
              {movie?.vote_average.toFixed(1)}
            </p>
            <p className="text-[#666666] text-xl">
              |{" "}
              {movie && (movie?.vote_count - (movie?.vote_count % 1000)) / 1000}
              k
            </p>
          </div>
          <div className="text-lg flex flex-col space-y-3 mb-8">
            <button className="bg-[#BE123C] flex items-center justify-center w-full font-medium rounded-lg py-3 text-white border-2 border-[#BE123C]">
              <img src="/tags.png" alt="" className="w-6 me-3" /> See Showtimes
            </button>
            <button className="bg-[#BE123C1A] flex items-center justify-center w-full font-medium rounded-lg py-3 text-[#333333] border-2 border-[#BE123C]">
              <img src="/option.png" alt="" className="w-6 me-3" /> More watch
              options
            </button>
          </div>
          <div className="relative rounded-xl">
            <div className="flex w-full space-x-1">
              <img
                src={`http://image.tmdb.org/t/p/w300/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg`}
                alt="movie-poster"
                data-testid="movie-poster"
                className="w-[30%] object-cover object-right rounded-l-xl"
              />
              <img
                src={`http://image.tmdb.org/t/p/w300/8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg`}
                alt="movie-poster"
                data-testid="movie-poster"
                className="w-[40%]"
              />
              <img
                src={`http://image.tmdb.org/t/p/w300/k9tv1rXZbOhH7eiCk378x61kNQ1.jpg`}
                alt="movie-poster"
                data-testid="movie-poster"
                className="w-[30%] object-cover object-left rounded-r-xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-[#12121280] font-medium text-[#E8E8E8] text-sm flex items-center justify-center space-x-3 px-4 py-3 rounded-xl">
              <img src="/option.png" alt="" className="w-6" />
              <p>The Best Movies and Shows in September</p>
            </div>
          </div>
          <Link to={'/'} className="block lg:hidden my-10 p-3 text-center text-white font-bold rounded-lg bg-[#BE123C]">Home</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

// /rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg
// /8SRUfRUi6x4O68n0VCbDNRa6iGL.jpg
// /k9tv1rXZbOhH7eiCk378x61kNQ1.jpg

{
  /* <ReactPlayer
  url="https://www.youtube.com/watch?v=SUXWAEX2jlg"
  playing
  controls
  light
  playIcon={
    <div className="flex flex-col items-center space-y-4">
      <div className="p-7 bg-[#ffffff40] rounded-[100%]">
        <img src="/play.png" alt="" className="w-10" />
      </div>
      <p className="text-white text-2xl">Watch Trailer</p>
    </div>
  }
  width={"100%"}
  height={"70vh"}
/> */
}
