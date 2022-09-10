import { useAuth } from 'hooks/useAuth';
import {
  NavigationList,
  NavigationListItem,
  NavigationLink,
} from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationList>
        <NavigationListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationListItem>

        {isLoggedIn && (
          <NavigationListItem>
            <NavigationLink to="/contacts">Contacts</NavigationLink>
          </NavigationListItem>
        )}
      </NavigationList>
    </nav>
  );
};
