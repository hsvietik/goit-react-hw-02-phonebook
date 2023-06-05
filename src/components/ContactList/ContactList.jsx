import css from './ContactList.module.css';
import { FaTrash } from 'react-icons/fa';
export const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul className={css.contactsList}>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter))
        .map(({ id, name, number }) => {
          return (
            <li key={id} className={css.contact}>
              <p className={css.contactName}>
                {name}: {number}
              </p>
              <button
                className={css.deleteButton}
                type="button"
                id={id}
                onClick={evt => deleteContact(evt.currentTarget.id)}
              >
                <FaTrash className={css.deleteIcon} />
              </button>
            </li>
          );
        })}
    </ul>
  );
};
