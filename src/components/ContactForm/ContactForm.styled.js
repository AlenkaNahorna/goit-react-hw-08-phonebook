import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormEl = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  margin-bottom: 30px;
  padding-top: 10px;
`;

export const Input = styled(Field)`
  padding: ${p => p.theme.space.m};
  border-radius: ${p => p.theme.radii.small};
  height: 30px;
  width: 400px;
  color: ${p => p.theme.colors.primaryColor};
  font-family: inherit;
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  border: none;
  box-shadow: 5px 5px 10px 0px rgba(149, 167, 173, 1);
  &:hover,
  &:focus {
    outline: none;
    border: 2px solid ${p => p.theme.colors.accentColor};
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-size: ${p => p.theme.fontSizes.m};
`;
