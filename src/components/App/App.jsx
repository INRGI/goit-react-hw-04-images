import SearchBar from 'components/Searchbar';
import { useEffect, useState } from 'react';
import * as API from '../../services/PixabayApi';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

const App = () => {
  const [searchName, setSearchName] = useState('');
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchName === '') {
      return;
    };

    async function addImages() {
      try {
        setIsLoading(true);

        const data = await API.getImages(searchName, currentPage);
        
        if (data.hits.length === 0) {
          return toast.info('Image not found... 🙁', {
            position: toast.POSITION.TOP_RIGHT,
          });
        };
        
        setImages(prev => [...prev, ...data.hits]);
        setIsLoading(false);
        setTotalPages(Math.ceil(data.totalHits / 12));

      } catch {
        toast.error('Something went wrong 😿', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } finally {
        setIsLoading(false);
      }
    };
    addImages();
  }, [currentPage, searchName]);

  const handleSubmit = data => {
    setSearchName(data);
    setImages([]);
    setCurrentPage(1);
  };

  const loadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
       
      <ImageGallery images={images} />
        
      {isLoading && <Loader/>}
      {images.length > 0 && totalPages !== currentPage && !isLoading && (
      <Button onClick={loadMore}/>
      )}
      <ToastContainer />
    </div>
  );
};

export default App;
