import { Box } from 'styles/Box';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Contacts = () => {
  return (
    <Box display="flex" align-items="center" flexDirection="column">
      <ContactForm />
      <Box display="flex" align-items="center" flexDirection="column">
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};

export default Contacts;
