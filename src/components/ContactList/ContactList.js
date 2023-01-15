import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from 'redux/selectors';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListElem } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

const getVisibleContacts = (items, filter) =>
  items.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));

export const ContactList = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const items = useSelector(getContacts);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const visibleContacts = getVisibleContacts(items, filter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      {visibleContacts.length === 0 ? (
        <p>no contacts</p>
      ) : (
        <ul>
          {visibleContacts.map(contact => (
            <ListElem key={contact.id}>
              <ContactItem contact={contact} />
            </ListElem>
          ))}
        </ul>
      )}
    </>
  );
};
