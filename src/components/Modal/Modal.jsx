import Modal from "react-modal";
import {
  AccessoriesItem,
  ListAccessories,
  SpanStyled,
  StyledAccessories,
  StyledBtnModal,
  StyledDescription,
  StyledImgModal,
  StyledLi1,
  StyledLink,
  StyledModalP,
  StyledModalP1,
  StyledRenta,
} from "./Modal.styled";
import { StyledSpan } from "../CarsList/CarList.styled";
import { nanoid } from "nanoid";

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
    border: "inherit",
  },
};

Modal.setAppElement("#root");

export const ModalComp = ({ modalIsOpen, closeModal, car }) => {
  const city = (car) => {
    const city = car.address.split(",");
    return city[1];
  };

  const country = (car) => {
    const country = car.address.split(",");
    return country[2];
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      overlayClassName="Overlay"
      car={car}
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
      <StyledImgModal src={car?.img} alt="carImg" />
      <StyledModalP>
        {car?.make} <StyledSpan>{car?.model}</StyledSpan> , {car?.year}
      </StyledModalP>
      <StyledModalP1>
        {city(car)} | {country(car)} | id: {car?.id} | Year:
        {car?.year} | Type: {car?.type} | Fuel Consumption:
        {car?.fuelConsumption} | Engine size: {car?.engineSize}
      </StyledModalP1>
      <StyledDescription>{car?.description}</StyledDescription>
      <StyledAccessories>Accessories and functionalities:</StyledAccessories>
      <ListAccessories>
        {car?.accessories.map((accessories) => {
          return (
            <AccessoriesItem key={nanoid()}>{accessories} |</AccessoriesItem>
          );
        })}
        {car?.functionalities.map((functionalities) => {
          return (
            <AccessoriesItem key={nanoid()}>
              {functionalities} |
            </AccessoriesItem>
          );
        })}
      </ListAccessories>
      <StyledRenta>Rental Conditions:</StyledRenta>
      <ListAccessories>
        {car?.rentalConditions.split("\n").map((rentalConditions) => {
          return <StyledLi1 key={nanoid()}>{rentalConditions}</StyledLi1>;
        })}
        <StyledLi1 key={nanoid()}>
          Mileage: <SpanStyled>{car?.mileage}</SpanStyled>{" "}
        </StyledLi1>
        <StyledLi1 key={nanoid()}>
          Price:{" "}
          <SpanStyled>{car?.rentalPrice.toLocaleString("en-Us")}</SpanStyled>
        </StyledLi1>
      </ListAccessories>
      <StyledLink href="tel: +380730000000">Rental car</StyledLink>
    </Modal>
  );
};
