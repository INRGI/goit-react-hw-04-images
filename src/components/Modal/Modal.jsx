import { createPortal } from "react-dom";
import { Img, Modalka, Overlay } from "./Modal.styled";

import PropTypes from 'prop-types';
const { useEffect } = require("react");

const modalRoot = document.querySelector('#modal-root');

const Modal = ({largeImageURL, tags, onClose}) => {
    
    useEffect(() => {
        const handleKeyDown = event => {
            if (event.code === 'Escape') {
                onClose();
            };
        };

        window.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'visible'
        };
    },[onClose])

    const handleBackdropClick = event => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return createPortal(
        <Overlay onClick={handleBackdropClick}>
            <Modalka className="modal">
                <Img src={largeImageURL} alt={tags} />
            </Modalka>
        </Overlay>,
        modalRoot
    );
};

Modal.propTypes = {
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Modal;