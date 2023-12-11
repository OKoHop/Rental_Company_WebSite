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
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../../redux/filters/operation";
import { brands } from "../../redux/filters/selector";
import { nanoid } from "nanoid";
// import { getCars } from "../../redux/addCars/selector";

const Filters = () => {
  const dispatch = useDispatch();
  const carBrands = useSelector(brands);
  // const getCar = useSelector(getCars);

  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);

  // const filterCars = (brand) => {
  //   console.log(brand);
  // };

  return (
    <Formik
      initialValues={{
        car: "",
      }}
      onSubmit={(values, actions) => {
        console.log(values);
      }}
    >
      <StyledForm>
        <StyledLabel>
          <StyledP>Car brand</StyledP>
          <StyledBrand as="select" placeholder="Select a model" name="car">
            {carBrands.map((brand) => {
              return (
                <option value={brand} key={nanoid()}>
                  {brand}
                </option>
              );
            })}
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
