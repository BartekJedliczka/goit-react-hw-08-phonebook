import { selectContacts, selectFilter } from 'redux/contacts/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/operations';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilter);
  const contactsFilter = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filteredContacts)
  );

  const handleDelete = id => {
    dispatch(removeContact(id));
  };

  return (
    <ul className={css.list}>
      {contactsFilter.map(({ id, name, number }) => (
        <li className={css.item} key={id}>
          <p className={css.label}>
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
  );
};

// import { selectFilteredContacts } from 'redux/contacts/selectors';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteContact } from 'redux/contacts/perations';
// import css from './ContactList.module.css';

// export const ContactList = () => {
//   const dispatch = useDispatch();
//   const filteredContacts = useSelector(selectFilteredContacts);
//   const handleDelete = id => {
//     dispatch(deleteContact(id));
//   };

//   return (
//     <>
//       <ul className={css.list}>
//         {filteredContacts.map(({ id, name, number }) => (
//           <li className={css.item} key={id}>
//             <p>
//               {name}: {number}
//             </p>
//             <button
//               className={css.button}
//               type="button"
//               onClick={() => handleDelete(id)}
//               value="delete"
//             >
//               Delete contact
//             </button>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };
