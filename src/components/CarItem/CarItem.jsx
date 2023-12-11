import { useState } from "react";
import {
  StyledDiv,
  StyledImg,
  StyledLi,
  StyledSvg,
  StyledUl,
} from "../CarsList/CarList.styled";
import { useSelector } from "react-redux";
import { getFavorites } from "../../redux/addToFavorites/selectors";

const CarItem = ({ car }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const getFavorite = useSelector(getFavorites);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleFavorite = (car) => {
    if (!getFavorite.includes(car)) {
      return dispatch(addToFavorite(car));
    }
    return dispatch(removeFromFavorite(car));
  };
  return (
    <StyledUl>
      {cars.map((car) => {
        return (
          <StyledLi key={car.id}>
            <StyledDiv>
              <StyledImg src={car.img} alt="car_img" />
              <StyledSvg
                className={getFavorite.includes(car) ? "isActive" : ""}
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="none"
                onClick={() => handleFavorite(car)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity=".8"
                  strokeWidth="1.5"
                  d="M15.63 3.458a4.125 4.125 0 0 0-5.835 0L9 4.253l-.795-.795A4.126 4.126 0 0 0 2.37 9.293l.795.795L9 15.922l5.835-5.835.795-.795a4.125 4.125 0 0 0 0-5.835Z"
                />
              </StyledSvg>
            </StyledDiv>
            <ContentDiv>
              <StyledDv>
                <p>
                  {car.make} <StyledSpan>{car.model}</StyledSpan> , {car.year}
                </p>
                <p>{car.rentalPrice}</p>
              </StyledDv>
              <StyledP>
                {city(car)} | {country(car)} | {car.rentalCompany} | {car.type}|{" "}
                {car.model} | {car.id} | {car.functionalities[0]}
              </StyledP>
            </ContentDiv>
            <StyledBtn onClick={openModal}>Learn More</StyledBtn>
            <ModalComp
              modalIsOpen={modalIsOpen}
              closeModal={closeModal}
              car={car}
            />
          </StyledLi>
        );
      })}
    </StyledUl>
  );
};

export default CarItem;
