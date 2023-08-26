import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { Component } from 'react';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  handlerChange = evt => {
    this.setState({
      name: evt.target.value,
    });
  };
  handlerSubmit = evt => {
    evt.preventDefault();
    this.setState(prevState => {
      return {
        name: '',
        contacts: [
          ...prevState.contacts,
          { id: nanoid(), name: prevState.name },
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
          inputValue={this.state.name}
        />
        <Contacts contacts={this.state.contacts} />
      </>
    );
  }
}
