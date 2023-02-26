import { selectFilteredContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);
  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <ul className={css.list}>
        {filteredContacts.map(({ id, name, number }) => (
          <li className={css.item} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={css.button}
              type="button"
              onClick={() => handleDelete(id)}
              value="delete"
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
