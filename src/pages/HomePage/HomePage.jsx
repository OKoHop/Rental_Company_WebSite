import About from "../../components/About/About";
import { StyledDiv, StyledH1 } from "./HomePage.style";

const HomePage = () => {
  return (
    <StyledDiv>
      <StyledH1>Drive By Dream</StyledH1>
      <About />
    </StyledDiv>
  );
};

export default HomePage;
