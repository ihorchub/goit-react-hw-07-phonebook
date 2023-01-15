import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListElem } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <>
      {getVisibleContacts().length === 0 ? (
        <ListElem>no contacts</ListElem>
      ) : (
        <ul>
          {getVisibleContacts().map(contact => (
            <ListElem key={contact.id}>
              <ContactItem contact={contact} />
            </ListElem>
          ))}
        </ul>
      )}
    </>
  );
};
