import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
// import { Suspense } from 'react';

import { Box } from 'styles/Box';
import { AppBar } from './common/AppBar/AppBar';
// import { Loader } from 'components/ui/Loader/Loader';

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
        {/* <Suspense fallback={<Loader />}> */}
        <Outlet />
        {/* </Suspense> */}
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
