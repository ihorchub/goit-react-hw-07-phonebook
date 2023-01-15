import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
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
