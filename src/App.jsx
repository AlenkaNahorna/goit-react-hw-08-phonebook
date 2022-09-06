import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Box } from 'styles/Box';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { MainTitle, SubTitle } from 'components/ui/titles';
import { SharedLayout } from 'layout/SharedLayout';
import { Loader } from 'components/ui/Loader/Loader';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const SignUp = lazy(() => import('pages/register/SignUp'));
const UserMenu = lazy(() => import('components/UserMenu/UserMenu'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="register" element={<SignUp />} />
            <Route path="login" element={<LogIn />} />
            <Route path="userMenu" element={<UserMenu />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        p="ml"
        m="0px auto"
        backgroundColor="secondaryColorBlue"
        width="100%"
        minHeight="100vh"
      >
        <MainTitle title="Phonebook" />
        <ContactForm />
        <SubTitle title="Contacts" />
        <Filter />
        <ContactList />
      </Box>
    </>
  );
};
