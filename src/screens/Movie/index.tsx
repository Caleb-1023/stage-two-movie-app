import { Outlet } from "react-router-dom";
import Sidebar, { SidebarItem } from "../../components/sidebar/Sidebar";
// import { Outlet } from "react-router-dom";
// import MovieDetails from "./components/MovieDetails";

const Movie = () => {
  return (
    <div className="dm-sans flex">
      <Sidebar>
        <SidebarItem
          icon={<img src="/home.png" alt="" className="w-8" />}
          text="home"
        //   path="/"
        />
        <SidebarItem
          icon={<img src="/movie.png" alt="" className="w-8" />}
          text="movies"
          path="movies"
        />
        <SidebarItem
          icon={<img src="/series.png" alt="" className="w-8" />}
          text="TV series"
          path="tv-series"
        />
        <SidebarItem
          icon={<img src="/calendar.png" alt="" className="w-8" />}
          text="upcoming"
          path="upcoming"
        />
      </Sidebar>
      <div className="w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Movie;
