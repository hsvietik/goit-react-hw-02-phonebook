// import css from './ContactList.module.css';
export const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <ul>
      {contacts
        .filter(({ name }) => name.toLowerCase().includes(filter))
        .map(({ id, name, number }) => {
          return (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
              <button type="button" id={id} onClick={deleteContact}>
                Delete
              </button>
            </li>
          );
        })}
    </ul>
  );
};
