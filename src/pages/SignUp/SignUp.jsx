import SignUpForm from 'components/SignUpForm/SignUpForm';
import { SubTitle } from 'components/ui/titles';

const SignUp = () => {
  return (
    <>
      <SubTitle title="For creating youre own contacts please register" />
      <SignUpForm />
    </>
  );
};

export default SignUp;
