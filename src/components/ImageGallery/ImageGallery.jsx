import PropTypes from 'prop-types';
import { Li } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
    return (
        <Li>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} />
            ))}
        </Li>  
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
        })
    ).isRequired
};

export default ImageGallery;