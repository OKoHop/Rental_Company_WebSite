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

  stroke: #ffffff;

  &:focus {
    fill: #3470ff;
    stroke: #3470ff;
  }
  &:hover {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;

export const StyledBtn = styled.button`
  width: 274px;
  height: 44px;
  background-color: #0b44cd;
  border: inherit;
  border-radius: 12px;
  color: #ffffff;

  &:hover {
    background-color: #3470ff;
  }
  &:focus {
    background-color: #3470ff;
  }
`;

export const ContentDiv = styled.div`
  width: 274px;
  height: 130px;
  overflow: hidden;
`;

export const StyledP = styled.p`
  text-overflow: ellipsis;
`;

export const StyledSpan = styled.span`
  color: #3470ff;
  font-family: "Inter";
`;

export const StyledDv = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;
