export const PhoneBookForm = ({ handlerSubmit, handlerChange, inputValue }) => {
  return (
    <>
      <h1>Phonebook</h1>
      <form onSubmit={handlerSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={inputValue}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handlerChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </>
  );
};
