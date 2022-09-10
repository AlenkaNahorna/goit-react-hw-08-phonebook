import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
// import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import operations from 'redux/auth/authOperations';

import { Label } from 'components/ui/Label/Label';
import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';
import {
  FormEl,
  ErrorText,
  Input,
} from 'components/ContactForm/ContactForm.styled';

const schema = yup.object().shape({
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

const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(operations.logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ number: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <Label htmlFor="email">Email: </Label>
        <Input type="email" name="email" />
        <FormError name="email" />

        <Label htmlFor="password">Password: </Label>
        <Input type="password" name="password" />
        <FormError name="password" />

        <PrimaryButton type="submit">LogIn</PrimaryButton>
      </FormEl>
    </Formik>
  );
};

export default LogIn;
