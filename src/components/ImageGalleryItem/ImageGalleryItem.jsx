import PropTypes from 'prop-types';
import { Img, Li } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
const { useState } = require("react");


const ImageGalleryItem = ({image}) => {
    const [showModal, setShowModal] = useState(false);
    
    const toggleModal = () => {
        setShowModal(prev => !prev)
    };

    return (
            <Li>
                <Img
                    src={image.webformatURL}
                    alt={image.tags}
                    onClick={toggleModal}
                />
                {showModal && (
            <Modal
                largeImageURL={image.largeImageURL}
                tags={image.tags}
                onClose={toggleModal}        
            />
            )}
            </Li>
        );
};

ImageGalleryItem.propTypes = {
    image:PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
};

export default ImageGalleryItem;