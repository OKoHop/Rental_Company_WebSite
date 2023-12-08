import { useSelector } from "react-redux";
import { getCars } from "../../redux/selector";
import {
  StyledUl,
  StyledLi,
  StyledDiv,
  StyledImg,
  StyledSvg,
} from "./CarList.styled";
import svg from "../../images/Vector.svg";

const CarsList = () => {
  const cars = useSelector(getCars);

  const city = (car) => {
    const city = car.address.split(",");
    return city[1];
  };

  const country = (car) => {
    const country = car.address.split(",");
    return country[2];
  };

  return (
    <section>
      <StyledUl>
        {cars.map((car) => {
          return (
            <StyledLi key={car.id}>
              <StyledDiv>
                <StyledImg src={car.img} alt="car_img" />
                <StyledSvg>
                  <use href={svg}></use>
                </StyledSvg>
              </StyledDiv>
              <p>
                {car.make} {car.model}, {car.year}
              </p>
              <p>{car.rentalPrice}</p>
              <p>
                {city(car)} | {country(car)} | {car.rentalCompany} | {car.type}|{" "}
                {car.model} | {car.id} | {car.functionalities[0]}
              </p>
              <button>Learn More</button>
            </StyledLi>
          );
        })}
      </StyledUl>
      <button>Load more</button>
    </section>
  );
};

export default CarsList;
