import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigationList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavigationListItem = styled.li`
  :not(:last-child) {
    margin-right: ${p => p.theme.space.xl};
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.l};
  line-height: 1.2;
  color: ${p => p.theme.colors.secondaryTextColor};
  letter-spacing: 2px;
  &.active {
    color: ${p => p.theme.colors.secondaryColorBlue};
  }
`;
