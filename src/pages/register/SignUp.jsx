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
  return (
    <Formik
      initialValues={{ name: '', number: '', password: '' }}
      validationSchema={schema}
      // onSubmit={handleSubmit}
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
  );
};

export default SignUp;

// export const ContactForm = () => {
//   const dispatch = useDispatch();
//   const items = useSelector(getContact);

//   const handleSubmit = (values, { resetForm }) => {
//     const newContact = {
//       id: nanoid(6),
//       name: values.name,
//       number: values.number,
//     };
//     if (
//       items.find(item =>
//         item.name.toLowerCase().includes(newContact.name.toLowerCase())
//       )
//     ) {
//       toast.info(`${newContact.name} is already in contact`);
//       return;
//     } else {
//       dispatch(addItem(newContact));
//     }
//     resetForm();
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', number: '' }}
//       validationSchema={schema}
//       onSubmit={handleSubmit}
//     >
//       <FormEl>
//         <Label>
//           Name:
//           <Input type="text" name="name" />
//           <FormError name="name" />
//         </Label>
//         <Label>
//           Number:
//           <Input type="tel" name="number" />
//           <FormError name="number" />
//         </Label>

//         <PrimaryButton type="submit">
//           <PrimaryButtonIcon />
//           Add contact
//         </PrimaryButton>
//       </FormEl>
//     </Formik>
//   );
// };
