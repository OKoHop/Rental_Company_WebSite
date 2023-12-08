import { useSelector } from "react-redux";
import { getPage } from "../../redux/selector";

const LoadMore = () => {
  const page = useSelector(getPage);

  return <button type="button">Load more</button>;
};

export default LoadMore;
