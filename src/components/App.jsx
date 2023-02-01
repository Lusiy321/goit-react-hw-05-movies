import { Component } from 'react';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactsForm/ContactsForm';
import { ContactList } from './ContactsList/ContactsList';
import { Styles, PhonebookWrap, MainTitle, SecondaryTitle } from './Styles';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount(prevProps, prevState) {
    const contacts = localStorage.getItem('contacts');
    const parsContacts = JSON.parse(contacts);
    if (parsContacts) {
      this.setState({ contacts: parsContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  getSubmitForm = ({ name, number }) => {
    const normalazedFind = name.toLowerCase();

    const isName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === normalazedFind
    );
    if (isName) {
      return alert(`${name} is already in contacts.`);
    }

    this.setState(prevstate => ({
      contacts: [{ name, number, id: nanoid(4) }, ...prevstate.contacts],
    }));
  };

  deleteName = id => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== id),
    }));
  };
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <>
        <Styles />
        <PhonebookWrap>
          <MainTitle>Phonebook</MainTitle>
          <ContactForm submitForm={this.getSubmitForm} />
          <SecondaryTitle>Contacts</SecondaryTitle>
          <Filter handleChange={this.handleChange} filter={this.state.filter} />
          <ContactList contacts={visibleContacts} onDelete={this.deleteName} />
        </PhonebookWrap>
      </>
    );
  }
}
