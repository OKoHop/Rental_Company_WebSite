import { useDispatch } from "react-redux";
import { nextpage } from "../../redux/addCars/slice";
import { StyledBtn } from "./LoadMore.styled";

const LoadMore = () => {
  const dispatch = useDispatch();

  return (
    <StyledBtn type="button" onClick={() => dispatch(nextpage(1))}>
      Load more
    </StyledBtn>
  );
};

export default LoadMore;
