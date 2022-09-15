import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import { Label } from 'components/ui/Label/Label';
import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';
import { ErrorText, FormEl, Input } from 'components/ui/formik';
import { operations } from 'redux/authSlice';

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

const LogInForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(operations.logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <Label>
          Email:
          <Input type="email" name="email" />
          <FormError name="email" />
        </Label>

        <Label>
          Password:
          <Input type="password" name="password" />
          <FormError name="password" />
        </Label>

        <PrimaryButton type="submit">LogIn</PrimaryButton>
      </FormEl>
    </Formik>
  );
};

export default LogInForm;
