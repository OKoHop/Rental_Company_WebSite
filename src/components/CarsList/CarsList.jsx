import { useSelector } from "react-redux";
import { getCars } from "../../redux/selector";
import { StyledUl, StyledLi, StyledDiv, StyledImg } from "./CarList.styled";

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
    </section>
  );
};

export default CarsList;
