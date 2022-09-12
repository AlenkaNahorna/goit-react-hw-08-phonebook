import { useField } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { ErrorText } from 'components/ui/formik';

export const InputPhone = ({ ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  return (
    <>
      <PhoneInput
        {...props}
        {...field}
        country="ua"
        value={field.value}
        id="number"
        defaultCountry="ua"
        preferredCountries={['ua']}
        autoFormat={true}
        onChange={value => {
          helpers.setValue(value);
        }}
        containerStyle={{
          color: 'black',
          marginBottom: '10px',
        }}
        inputStyle={{
          width: '408px',
          height: '38px',
          borderRadius: '5px',
          border: 'none',
          boxShadow: '5px 5px 10px 0px rgba(149, 167, 173, 1)',
        }}
      />
      {meta.error && meta.touched && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};
