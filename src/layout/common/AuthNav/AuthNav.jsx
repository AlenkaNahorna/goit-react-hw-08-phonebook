import React from 'react';
import { Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <Link to="/signUp">SignUp</Link>
      <Link to="/login">logIn</Link>
    </div>
  );
};
