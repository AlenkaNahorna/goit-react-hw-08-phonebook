import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
// import { toast } from 'react-toastify';
// import { useDispatch, useSelector } from 'react-redux';

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
  return (
    <Formik
      initialValues={{ number: '', password: '' }}
      validationSchema={schema}
      // onSubmit={handleSubmit}
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

export default LogIn;
