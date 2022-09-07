import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { Label } from 'components/ui/Label/Label';
import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';
import {
  FormEl,
  ErrorText,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import operations from 'redux/auth/authOperations';

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).required(),
});
const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

const SignUp = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(operations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Formik
      initialValues={{ name: '', number: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <Label>
          Name:
          <Input type="text" name="name" value={name} onChange={handleChange} />
          <FormError name="name" />
        </Label>

        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormError name="email" />
        </Label>

        <Label>
          Password:
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <FormError name="password" />
        </Label>

        <PrimaryButton type="submit">SignUp</PrimaryButton>
      </FormEl>
    </Formik>
  );
};

export default SignUp;
