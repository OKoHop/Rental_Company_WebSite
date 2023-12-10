import { useDispatch } from "react-redux";
import { nextpage } from "../../redux/addCars/slice";

const LoadMore = () => {
  const dispatch = useDispatch();

  return (
    <button type="button" onClick={() => dispatch(nextpage(1))}>
      Load more
    </button>
  );
};

export default LoadMore;
