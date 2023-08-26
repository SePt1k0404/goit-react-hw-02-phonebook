export const Contacts = ({ contacts, handlerChange, filter }) => {
  const contactsArr = contacts.map(el => (
    <li key={el.id}>
      {el.name} {el.number}
    </li>
  ));
  return (
    <>
      <h2>Contacts</h2>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={handlerChange}
        />
      </label>
      <ul>{contactsArr}</ul>
    </>
  );
};
