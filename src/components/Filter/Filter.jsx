// import css from './Filter.module.css';
export const Filter = ({ findContact }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" onChange={findContact} />
    </div>
  );
};
