import { Outlet } from 'react-router-dom';
import { Header } from 'layout/common/Header/Header';
import { Box } from 'styles/Box';

export const SharedLayout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      minHeight="100vh"
      backgroundColor="secondaryBgColor"
    >
      <Header />
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding="xl"
      >
        <Outlet />
      </Box>
    </Box>
  );
};
