import css from './Filter.module.css';
export const Filter = ({ findContact }) => {
  return (
    <div className={css.nameSearchForm}>
      <p>Find contacts by name</p>
      <input
        className={css.nameSearchInput}
        type="text"
        onChange={evt => findContact(evt.currentTarget.value)}
      />
    </div>
  );
};
