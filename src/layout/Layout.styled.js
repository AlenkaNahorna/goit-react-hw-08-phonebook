import styled from '@emotion/styled';
import phone from 'assets/phone.png';

export const Container = styled.div`
  padding-top: ${p => p.theme.space.l};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: ${p => p.theme.colors.backgroundColor};
  background-image: linear-gradient(
      180deg,
      rgba(93, 195, 199, 0.2) 0%,
      rgba(44, 154, 176, 0.1) 100%
    ),
    url(${phone});
  background-size: 600px;
  background-position: 50% 0%;
  background-repeat: no-repeat;
`;
