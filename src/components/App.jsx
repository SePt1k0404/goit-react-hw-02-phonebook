import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };
  handlerChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  handlerSubmit = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      return {
        name: '',
        number: '',
        filter: '',
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: prevState.name, number: prevState.number },
        ],
      };
    });
  };
  render() {
    return (
      <>
        <PhoneBookForm
          handlerSubmit={this.handlerSubmit}
          handlerChange={this.handlerChange}
          inputValue={this.state}
        />
        <Contacts
          contacts={this.state.contacts}
          handlerChange={this.handlerChange}
          filter={this.state.filter}
        />
      </>
    );
  }
}
