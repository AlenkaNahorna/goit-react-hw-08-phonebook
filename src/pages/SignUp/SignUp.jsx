import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
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
  const handleSubmit = (values, { resetForm }) => {
    dispatch(operations.register(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <Label htmlFor="name">Name: </Label>
        <Input type="text" name="name" />
        <FormError name="name" />
        <Label htmlFor="email">Email: </Label>
        <Input type="email" name="email" />
        <FormError name="email" />

        <Label htmlFor="password">Password: </Label>
        <Input type="password" name="password" />
        <FormError name="password" />

        <PrimaryButton type="submit">SignUp</PrimaryButton>
      </FormEl>
    </Formik>
  );
};

export default SignUp;
