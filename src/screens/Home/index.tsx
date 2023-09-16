import Footer from "../../components/footer/Footer";
import MovieList from "./components/MovieList";
import Showcase from "./components/Showcase";

const Home = () => {
  return (
    <div className="dm-sans overflow-x-hidden">
      <Showcase />
      <MovieList />
      <Footer />
    </div>
  );
};

export default Home;
