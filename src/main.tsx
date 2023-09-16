import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Home from "./screens/Home/index.tsx";
import Movie from "./screens/Movie/index.tsx";
import MovieDetails from "./screens/Movie/components/MovieDetails.tsx";
import SearchMovies from "./screens/Movie/components/SearchMovies.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="movies" element={<Movie />}>
        <Route path=":movie_id" element={<MovieDetails />} />
        <Route path="search/:search_key" element={<SearchMovies />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
