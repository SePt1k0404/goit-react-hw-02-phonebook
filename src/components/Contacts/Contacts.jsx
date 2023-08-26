export const Contacts = ({ contacts }) => {
  const contactsArr = contacts.map(el => <li key={el.id}>{el.name}</li>);
  return (
    <>
      <h2>Contacts</h2>
      <ul>{contactsArr}</ul>
    </>
  );
};
