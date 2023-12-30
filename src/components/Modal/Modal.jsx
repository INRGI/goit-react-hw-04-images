import { createPortal } from "react-dom";
import { Modalka, Overlay } from "./Modal.styled";

import PropTypes from 'prop-types';
const { Component } = require("react");

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component{

    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'hidden';
    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown);
        document.body.style.overflow = 'visible';
    };

    handleKeyDown = event => {
        if (event.code === 'Escape') {
            this.props.onClose();
        };
    };

    handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImageURL, tags } = this.props;

        return createPortal(
            <Overlay onClick={this.handleBackdropClick}>
                <Modalka className="modal">
                    <img src={largeImageURL} alt={tags} />
                </Modalka>
            </Overlay>,
            modalRoot
        );
    };
};

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;