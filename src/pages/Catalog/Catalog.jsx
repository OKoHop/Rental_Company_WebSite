import { useDispatch } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import Filters from "../../components/Filters/Filters";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";

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
      </div>
    </main>
  );
};

export default Catalog;
