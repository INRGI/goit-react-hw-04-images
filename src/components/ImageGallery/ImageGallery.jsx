import PropTypes from 'prop-types';
import { Ul } from './ImageGallery.styled';
import ImageGalleryItem from 'components/ImageGalleryItem';

const ImageGallery = ({ images, firstNewElementRef, galleryRef }) => {
  return (
    <Ul ref={galleryRef}>
      {images.map((image, index) => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          ref={index === images.length - 12 ? firstNewElementRef : null}
        />
      ))}
    </Ul>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
    firstNewElementRef: PropTypes.object,
    galleryRef: PropTypes.object,
};

export default ImageGallery;
