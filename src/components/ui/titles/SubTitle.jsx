import styled from '@emotion/styled';

export const StyledSubTitle = styled.h2`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  margin-bottom: ${p => p.theme.space.l};
  color: ${p => p.theme.colors.accentColor};
`;

export const SubTitle = ({ title }) => {
  return <StyledSubTitle>{title}</StyledSubTitle>;
};
