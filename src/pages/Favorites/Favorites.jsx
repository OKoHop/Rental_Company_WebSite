import { FavoriteList } from "../../components/FavoriteList/FavoriteList";
import Filters from "../../components/Filters/Filters";

const Favorites = () => {
  return (
    <main>
      <div className="container">
        <Filters />
        <FavoriteList />
      </div>
    </main>
  );
};

export default Favorites;
