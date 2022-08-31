import {
  NavigationList,
  NavigationListItem,
  NavigationLink,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <NavigationList>
        <NavigationListItem>
          <NavigationLink to="/">Home</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="/login">LogIn</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="/register">SignUp</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="/UserMenu">UserMenu</NavigationLink>
        </NavigationListItem>
        <NavigationListItem>
          <NavigationLink to="/contacts">Contacts</NavigationLink>
        </NavigationListItem>
      </NavigationList>
    </nav>
  );
};
