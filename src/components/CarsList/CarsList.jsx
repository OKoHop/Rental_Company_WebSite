import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { getCars } from "../../redux/addCars/selector";
import { StyledUl, StyledLi } from "./CarList.styled";
import {
  addToFavorite,
  removeFromFavorite,
} from "../../redux/addToFavorites/slice";
import { getFavorites } from "../../redux/addToFavorites/selectors";

import CarItem from "../CarItem/CarItem";

const CarsList = () => {
  const cars = useSelector(getCars);
  const dispatch = useDispatch();
  const getFavorite = useSelector(getFavorites);

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
              <CarItem
                car={car}
                handleFavorite={handleFavorite}
                getFavorite={getFavorite}
              />
            </StyledLi>
          );
        })}
      </StyledUl>
    </section>
  );
};

export default CarsList;
