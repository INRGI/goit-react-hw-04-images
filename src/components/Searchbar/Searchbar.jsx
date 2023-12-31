import PropTypes from 'prop-types';
import { IoSearchSharp } from "react-icons/io5";
import { useState } from 'react';
import { Form, FormButton, Header, Input, Label } from './Searchbar.styled';

const SearchBar = ({onSubmit}) => {
    const [searchName, setSearchName] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleChange = event => setInputValue(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        setSearchName(inputValue.trim());
        onSubmit(searchName);
        event.target.reset();
    };

    return (
          <Header>
            <Form onSubmit={handleSubmit}>
                    <FormButton type="submit">
                    <IoSearchSharp size={24}/>
                    <Label>Search</Label>
                </FormButton>

                <Input
                    value={inputValue}
                    name="searchName"
                    type="text"
                    autocomplete="off"
                    placeholder="Search images and photos"
                    onChange={handleChange}
                />
            </Form>
        </Header>
      );
};

SearchBar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
