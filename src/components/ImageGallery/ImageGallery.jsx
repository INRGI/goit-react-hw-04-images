import PropTypes from 'prop-types';
import { Ul } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images }) => {
    return (
        <Ul>
            {images.map(image => (
                <ImageGalleryItem key={image.id} image={image} />
            ))}
        </Ul>  
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