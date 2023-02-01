import PropTypes from 'prop-types';
import { List, Button, Item } from './ContactsList.styled';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <p>
            {contact.name} : {contact.number}
          </p>
          <Button type="button" onClick={() => onDelete(contact.id)}>
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
