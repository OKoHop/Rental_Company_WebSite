import { nanoid } from "nanoid";
import { Overlay, StyledDiv } from "./Modal.styled";

const Modal = ({ car }) => {
  const city = (car) => {
    const city = car.address.split(",");
    return city[1];
  };

  const country = (car) => {
    const country = car.address.split(",");
    return country[2];
  };
  return (
    <StyledDiv className="visually-hidden">
      {/* <Overlay></Overlay> */}
      <img src="" alt="" />
      {car.make}
      {car.model}
      {car.year}
      <p>
        {city(car)} | {country(car)} | {car.rentalCompany} | {car.type}|{" "}
        {car.model} | {car.id}
      </p>
      <p>{car.description}</p>
      <p>Accessories and functionalities:</p>
      <ul>
        {car.accessories.map((accessories) => {
          return (
            <li key={nanoid()}>
              <p>{accessories}</p>
            </li>
          );
        })}
        {car.functionalities.map((functionalities) => {
          return (
            <li key={nanoid()}>
              <p>{functionalities}</p>
            </li>
          );
        })}
      </ul>
      <p>Rental Conditions: </p>
      <ul>
        {car.rentalConditions.split("/n").map((rentalCondition) => {
          return <li key={nanoid()}>{rentalCondition}</li>;
        })}
        <li key={nanoid()}>{car.mileage}</li>
        <li key={nanoid()}>{car.price}</li>
      </ul>
    </StyledDiv>
  );
};

export default Modal;
