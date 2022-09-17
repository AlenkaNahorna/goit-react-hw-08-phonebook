import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavStyled = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${p => p.theme.space.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.2;
  color: ${p => p.theme.colors.secondaryColorBlue};
  letter-spacing: 2px;
  &.active {
    color: ${p => p.theme.colors.accentColor};
  }
`;
