import { useDispatch } from 'react-redux';
import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';
import { Box } from 'styles/Box';
import { useAuth } from 'hooks/useAuth';
import defaultAvatar from 'components/UserMenu/defaultAvatar.png';
import operations from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const avatar = defaultAvatar;

  return (
    <Box display="flex" alignItems="center">
      <img src={avatar} alt="avatar" width="32" />
      <span>Welcome, {user.name}</span>
      <PrimaryButton
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        Logout
      </PrimaryButton>
    </Box>
  );
};

export default UserMenu;
