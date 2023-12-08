import { useDispatch } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import Filters from "../../components/Filters/Filters";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import LoadMore from "../../components/LoadMore/LoadMore";

const Catalog = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <main>
      <div className="container">
        <Filters />
        <CarsList />
        <LoadMore />
      </div>
    </main>
  );
};

export default Catalog;
