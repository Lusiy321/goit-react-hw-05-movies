import { useState } from 'react';
import { Form, Button, Header, Input } from './SearchBar.styled';
import PropTypes from 'prop-types';

export const SearchBar = ({ onSubmit }) => {
  const [searchName, setSearchName] = useState('');

  const handleChange = evt => {
    setSearchName(evt.target.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (searchName.trim() === '') {
      return;
    }
    onSubmit(searchName);
    setSearchName('');
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={searchName}
          type="text"
          autoComplete="off"
          autoFocus
        />
        <Button type="submit">Search</Button>
      </Form>
    </Header>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
