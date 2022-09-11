import styled from '@emotion/styled';

export const StyledMainTitle = styled.h1`
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xl};
  margin-bottom: ${p => p.theme.space.l};
  color: ${p => p.theme.colors.accentColor};
`;

export const MainTitle = ({ title }) => {
  return <StyledMainTitle>{title}</StyledMainTitle>;
};
