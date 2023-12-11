import { Form, Field } from "formik";
import styled from "styled-components";

export const StyledForm = styled(Form)`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
`;

export const StyledBtn = styled.button`
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  border: inherit;
  border-radius: 12px;

  font-size: 14px;
  font-weight: 600;
  line-height: 1.42;
  color: #ffffff;
`;

export const StyledBrand = styled(Field)`
  width: 224px;
  height: 48px;
  border: inherit;
  border-radius: 14px;
  padding: 14px 89px 14px 18px;
  background-color: #f7f7fb;

  font-size: 18px;
  line-height: 1.11;
`;
export const StyledPrice = styled(Field)`
  width: 145px;
  height: 48px;
  border: inherit;
  border-radius: 14px;
  padding: 14px 18px 14px 18px;
  background-color: #f7f7fb;

  font-size: 18px;
  line-height: 1.11;
`;

export const StyledLeftKm = styled(Field)`
  width: 160px;
  height: 48px;
  border: inherit;
  border-right: 1px solid #8a8a8933;
  border-radius: 14px 0 0 14px;
  background-color: #f7f7fb;

  padding-left: 24px;
  font-size: 18px;
  line-height: 1.11;
`;

export const StyledRightKm = styled(Field)`
  width: 160px;
  height: 48px;
  border: inherit;
  border-radius: 0 14px 14px 0;
  background-color: #f7f7fb;

  padding-left: 24px;
  font-size: 18px;
  line-height: 1.11;
`;

export const StyledP = styled.p`
  // margin-bottom: 10px;

  font-size: 14px;
  line-height: 1.28px;
  color: #8a8a89;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
