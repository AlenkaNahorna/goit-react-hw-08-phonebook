import * as yup from 'yup';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';

import { ErrorText, FormEl, Input } from 'components/ui/formik';
import { Label } from 'components/ui/Label/Label';
import { PrimaryButton } from 'components/ui/buttons/PrimaryButton';
import { SubTitle } from 'components/ui/titles';
import operations from 'redux/auth/authOperations';
import { Box } from 'styles/Box';

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
    const user = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(operations.register(user));
    resetForm();
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      // p="ml"
      // m="0px auto"
      // backgroundColor="secondaryColorBlue"
      // width="100%"
      // minHeight="100vh"
    >
      <SubTitle title="For creating youre own contacts please register" />

      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <FormEl>
          <Label>
            Name:
            <Input type="text" name="name" />
            <FormError name="name" />
          </Label>

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

          <PrimaryButton type="submit">SignUp</PrimaryButton>
        </FormEl>
      </Formik>
    </Box>
  );
};

export default SignUp;
