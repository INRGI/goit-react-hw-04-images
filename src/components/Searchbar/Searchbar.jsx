import PropTypes from 'prop-types';
import { IoSearchSharp } from "react-icons/io5";
import { Component } from 'react';
import { Form, FormButton, Header, Input, Label } from './Searchbar.styled';

class Searchbar extends Component {
    state = {
        searchName: '',
        inputValue: '',
    };

    handleChange = event => {
        this.setState({ inputValue: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(event.target.elements.searchName.value.trim());
        event.target.reset();
    };

    render() {
        return (
          <Header>
            <Form onSubmit={this.handleSubmit}>
                    <FormButton type="submit">
                    <IoSearchSharp size={24}/>
                    <Label>Search</Label>
                </FormButton>

                    <Input
                    name="searchName"
                    type="text"
                    autocomplete="off"
                    placeholder="Search images and photos"
                    onChange={this.handleChange}
                />
            </Form>
        </Header>
      ); 
    };
};

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
