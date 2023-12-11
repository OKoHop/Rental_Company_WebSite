import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Modal from "react-modal";

import { getCars } from "../../redux/addCars/selector";
import {
  StyledUl,
  StyledLi,
  StyledDiv,
  StyledImg,
  StyledSvg,
  StyledBtn,
  ContentDiv,
  StyledP,
  StyledSpan,
  StyledDv,
} from "./CarList.styled";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/addToFavorites/slice";
import { getFavorites } from "../../redux/addToFavorites/selectors";
import { nanoid } from "nanoid";
import {
  AccessoriesItem,
  ListAccessories,
  SpanStyled,
  StyledAccessories,
  StyledBtnModal,
  StyledDescription,
  StyledImgModal,
  StyledLi1,
  StyledModalP,
  StyledModalP1,
  StyledRentBtn,
  StyledRenta,
} from "./Modal.styled";

const customStyles = {
  content: {
    width: "541px",
    padding: "40px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "24px",
  },
};

Modal.setAppElement("#modal");

const CarsList = () => {
  const cars = useSelector(getCars);
  const dispatch = useDispatch();
  const getFavorite = useSelector(getFavorites);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const city = (car) => {
    const city = car.address.split(",");
    return city[1];
  };

  const country = (car) => {
    const country = car.address.split(",");
    return country[2];
  };

  const handleFavorite = (car) => {
    if (!getFavorite.includes(car)) {
      return dispatch(addToFavorite(car));
    }
    return dispatch(removeFromFavorite(car));
  };

  return (
    <section>
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
                  {city(car)} | {country(car)} | {car.rentalCompany} |{" "}
                  {car.type}| {car.model} | {car.id} | {car.functionalities[0]}
                </StyledP>
              </ContentDiv>
              <StyledBtn onClick={openModal}>Learn More</StyledBtn>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                overlayClassName="Overlay"
              >
                <StyledBtnModal onClick={closeModal}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                  >
                    <path
                      stroke="#121417"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.8"
                      d="M18 6 6 18M6 6l12 12"
                    />
                  </svg>
                </StyledBtnModal>
                <StyledImgModal src={car.img} alt="carImg" />
                <StyledModalP>
                  {car.make} <StyledSpan>{car.model}</StyledSpan> , {car.year}
                </StyledModalP>
                <StyledModalP1>
                  {city(car)} | {country(car)} | id: {car.id} | Year:
                  {car.year} | Type: {car.type} | Fuel Consumption:
                  {car.fuelConsumption} | Engine size: {car.engineSize}
                </StyledModalP1>
                <StyledDescription>{car.description}</StyledDescription>
                <StyledAccessories>
                  Accessories and functionalities:
                </StyledAccessories>
                <ListAccessories>
                  {car.accessories.map((accessories) => {
                    return (
                      <AccessoriesItem key={nanoid()}>
                        {accessories} |
                      </AccessoriesItem>
                    );
                  })}
                  {car.functionalities.map((functionalities) => {
                    return (
                      <AccessoriesItem key={nanoid()}>
                        {functionalities} |
                      </AccessoriesItem>
                    );
                  })}
                </ListAccessories>
                <StyledRenta>Rental Conditions:</StyledRenta>
                <ListAccessories>
                  {car.rentalConditions.split("\n").map((rentalConditions) => {
                    return (
                      <StyledLi1 key={nanoid()}>{rentalConditions}</StyledLi1>
                    );
                  })}
                  <StyledLi1 key={nanoid()}>
                    Mileage: <SpanStyled>{car.mileage}</SpanStyled>{" "}
                  </StyledLi1>
                  <StyledLi1 key={nanoid()}>
                    Price: <SpanStyled>{car.rentalPrice}</SpanStyled>
                  </StyledLi1>
                </ListAccessories>
                <StyledRentBtn onClick={console.log("You rent car")}>
                  Rental car
                </StyledRentBtn>
              </Modal>
            </StyledLi>
          );
        })}
      </StyledUl>
    </section>
  );
};

export default CarsList;
