import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { addItem, getContact } from 'redux/contactsSlice';
import { Label } from 'components/ui/Label/Label';
import {
  PrimaryButton,
  PrimaryButtonIcon,
} from 'components/ui/buttons/PrimaryButton';
import { ErrorText, FormEl, Input } from 'components/ui/formik';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup
    .number()
    .required()
    .test({
      test: value => /^[\d+][\d()-]{4,14}\d$/i.test(value),
    }),
});

const FormError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  );
};

export const ContactForm = () => {
  const dispatch = useDispatch();
  const items = useSelector(getContact);

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(6),
      name: values.name,
      number: values.number,
    };
    if (
      items.find(item =>
        item.name.toLowerCase().includes(newContact.name.toLowerCase())
      )
    ) {
      toast.info(`${newContact.name} is already in contact`);
      return;
    } else {
      dispatch(addItem(newContact));
    }
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormEl>
        <Label>
          Name:
          <Input type="text" name="name" />
          <FormError name="name" />
        </Label>
        <Label>
          Number:
          <Input type="tel" name="number" />
          <FormError name="number" />
        </Label>

        <PrimaryButton type="submit">
          <PrimaryButtonIcon />
          Add contact
        </PrimaryButton>
      </FormEl>
    </Formik>
  );
};
