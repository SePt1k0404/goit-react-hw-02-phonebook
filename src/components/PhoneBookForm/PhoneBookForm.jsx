import { Component } from 'react';

export class PhoneBookForm extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handlerSubmit = evt => {
    evt.preventDefault();
    const contact = evt.currentTarget.elements.name.value;
    this.setState(prevState => {
      const newContacts = prevState.contacts;
      newContacts.push(contact);
      console.log(newContacts);
      return { contacts: newContacts };
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <form onSubmit={this.handlerSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
