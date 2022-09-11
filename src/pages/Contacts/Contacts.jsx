import { Box } from 'styles/Box';
// import { AddContactForm } from 'components/AddContactForm/AddContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactForm } from 'components/ContactForm/ContactForm';

const Contacts = () => {
  return (
    <Box display="flex" align-items="center" flex-direction="column">
      <ContactForm />
      <div>
        <Filter />
        <ContactList />
      </div>
    </Box>
  );
};

export default Contacts;
