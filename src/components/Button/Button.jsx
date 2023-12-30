import PropTypes from 'prop-types';
import { Container, LoadButton } from './Button.styled';

const Button = ({onClick}) => {
    return (
        <Container>
            <LoadButton type="button" onClick={onClick}>Load more</LoadButton>
        </Container>
  ); 
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default Button;