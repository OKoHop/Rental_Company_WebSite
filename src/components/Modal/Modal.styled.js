import styled from "styled-components";

export const StyledDiv = styled.div`
  width: 541px;
  padding: 40px;

  border-radius: 24px;
  background-color: #ffffff;

  position: absolut;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transform: translateX(-100%);
  transition: transform 250ms ease;
`;
