import styled from "styled-components";

export const StyledUl = styled.ul`
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 29px;
  row-gap: 50px;
  flex-wrap: wrap;
`;

export const StyledLi = styled.li`
  width: 274px;
  height: 426px;
`;
export const StyledDiv = styled.div`
  width: 274px;
  height: 268px;
  border-radius: 14px;
  border: 1px solid;
  position: relative;
`;

export const StyledImg = styled.img`
  height: 100%;
  object-fit: cover;

  border-radius: 14px;
`;

export const StyledSvg = styled.svg`
  width: 18px;
  height: 18px;

  position: absolute;
  top: 14px;
  right: 14px;

  &:focus {
    fill: #3470ff;
    stroke: #3470ff;
  }
  &:hover {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;
