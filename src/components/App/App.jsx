import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { GlobalStyle } from './GlobalStyles';
import { ContactsWrapper, Title, Wrapper } from './App.styled';

export const App = () => {
  return (
    <>
      <Wrapper>
        <Title>Phonebook</Title>
        <ContactForm />
        <ContactsWrapper>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </ContactsWrapper>
      </Wrapper>
      <GlobalStyle />
    </>
  );
};
