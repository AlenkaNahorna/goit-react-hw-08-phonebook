import { MainTitle, SubTitle } from 'components/ui/titles';
import { Box } from 'styles/Box';

const Home = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <MainTitle title="Welcome to your Phonebook" />
      <SubTitle title="This application created for saving youre contacts" />
      <SubTitle
        title="You always can add new contacts, edit or delete already existing
        contacts"
      />
    </Box>
  );
};

export default Home;
