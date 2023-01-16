import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ListElem } from './ContactList.styled';
import { fetchContacts } from 'redux/operations';
import {
  selectIsLoading,
  selectError,
  selectVisibleContacts,
} from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

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
