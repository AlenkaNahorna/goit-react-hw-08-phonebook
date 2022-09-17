import styled from '@emotion/styled';

export const Header = styled.header`
  width: 100%;
  background-color: #529fbb;
  /* ${p => p.theme.colors.backgroundColor}; */
  position: static;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  box-shadow: 9px 9px 16px rgba(163, 177, 198, 0.6),
    -9px -9px 16px rgba(255, 255, 255, 0.5);
`;
