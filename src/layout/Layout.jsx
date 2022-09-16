import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Box } from 'styles/Box';
import { AppBar } from './common/AppBar/AppBar';

const Layout = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="100%"
      minHeight="100vh"
      backgroundColor="backgroundColor"
    >
      <AppBar />

      <Box display="flex" flexDirection="column" alignItems="center" pt="xl">
        <Outlet />

        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Box>
    </Box>
  );
};

export default Layout;
