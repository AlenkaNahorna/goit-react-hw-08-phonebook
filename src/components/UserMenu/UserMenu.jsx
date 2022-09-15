import { useDispatch } from 'react-redux';
import { Box } from 'styles/Box';
import { useAuth } from 'hooks/useAuth';
import defaultAvatar from 'components/UserMenu/defaultAvatar.png';
import { SecondaryButton } from 'components/ui/buttons/SecondaryButton';
import { UserMenuText } from './UserMenu.styyled';
import { operations } from 'redux/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Box display="flex" alignItems="center">
      <img src={avatar} alt="avatar" width="32" />
      <UserMenuText> Welcome, {user.name}</UserMenuText>

      <SecondaryButton
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        Logout
      </SecondaryButton>
    </Box>
  );
};

export default UserMenu;
