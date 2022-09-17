import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: ${p => p.theme.colors.secondaryTexColor};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.s};
  margin-bottom: ${p => p.theme.space.l};
`;
