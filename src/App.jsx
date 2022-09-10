import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

// import { Box } from 'styles/Box';
// import { ContactForm } from 'components/ContactForm/ContactForm';
// import { ContactList } from 'components/ContactList/ContactList';
// import { Filter } from 'components/Filter/Filter';
// import { MainTitle, SubTitle } from 'components/ui/titles';

import operations from 'redux/auth/authOperations';
import { Layout } from 'layout/Layout';
import { useAuth } from 'hooks/useAuth';

const Home = lazy(() => import('pages/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const LogIn = lazy(() => import('pages/LogIn/LogIn'));
const SignUp = lazy(() => import('pages/SignUp/SignUp'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(operations.fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h1>Refreshing user...</h1>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="login" element={<LogIn />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
  // <>
  //         <Box
  //     display="flex"
  //     flexDirection="column"
  //     alignItems="center"
  //     p="ml"
  //     m="0px auto"
  //     backgroundColor="secondaryColorBlue"
  //     width="100%"
  //     minHeight="100vh"
  //   >
  //     <MainTitle title="Phonebook" />
  //     <ContactForm />
  //     <SubTitle title="Contacts" />
  //     <Filter />
  //     <ContactList />
  //   </Box>
  // </>
};
