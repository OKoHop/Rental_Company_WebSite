import { useDispatch, useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import Filters from "../../components/Filters/Filters";
import { useEffect } from "react";
import { fetchCars } from "../../redux/addCars/operations";
import LoadMore from "../../components/LoadMore/LoadMore";
import { getPage } from "../../redux/addCars/selector";

const Catalog = () => {
  const dispatch = useDispatch();
  const page = useSelector(getPage);

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

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
