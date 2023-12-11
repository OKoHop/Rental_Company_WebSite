import { Formik } from "formik";
import {
  StyledBrand,
  StyledBtn,
  StyledForm,
  StyledLabel,
  StyledLeftKm,
  StyledP,
  StyledPrice,
  StyledRightKm,
} from "./Filters.styled";

const Filters = () => {
  return (
    <Formik>
      <StyledForm>
        <StyledLabel>
          <StyledP>Car brand</StyledP>
          <StyledBrand name="carBrand" as="select" placeholder="Enter the text">
            <option value="default">Enter the text</option>
          </StyledBrand>
        </StyledLabel>

        <StyledLabel>
          <StyledP>Price/ 1 hour</StyledP>
          <StyledPrice name="price" as="select">
            <option value="to$">To $</option>
          </StyledPrice>
        </StyledLabel>

        <StyledLabel>
          <StyledP>Car mileage/ km</StyledP>
          <div>
            <StyledLeftKm name="mileageFrom" placeholder="From" />
            <StyledRightKm name="mileageTo" placeholder="To" />
          </div>
        </StyledLabel>

        <StyledBtn type="submit">Search</StyledBtn>
      </StyledForm>
    </Formik>
  );
};

export default Filters;
