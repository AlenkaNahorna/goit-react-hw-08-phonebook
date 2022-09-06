import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';
import { Box } from 'styles/Box';

const UserMenu = () => {
  return (
    <Box display="flex" alignItems="center">
      {/* <img src={avatar} alt="" width="32" style={styles.avatar} />
      <span style={styles.name}>Добро пожаловать, {user.name}</span> */}
      <span>Добро пожаловать Name</span>
      <PrimaryButton type="button">Logout</PrimaryButton>
      {/* <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button> */}
    </Box>
  );
};

export default UserMenu;
