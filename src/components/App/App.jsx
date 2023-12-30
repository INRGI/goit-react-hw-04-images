import Searchbar from 'components/Searchbar';
import { Component } from 'react';
import * as API from '../../services/PixabayApi';
import { ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';

class App extends Component{

  state = {
    searchName : '',
    images: [],
    currentPage: 1,
    totalPages: 0,
    error: null,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchName !== this.state.searchName ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.addImages();
    }
  };

  handleSubmit = data => {
    this.setState({
      searchName: data,
      images: [],
      currentPage: 1,
    });
  };

  addImages = async () => {
    const { searchName, currentPage } = this.state;
    try {
      this.setState({ isLoading: true });

      const data = await API.getImages(searchName, currentPage);

      if (data.hits.length === 0) {
        return toast.info('Image not found... 🙁', {
          position: toast.POSITION.TOP_RIGHT,
        });
      };

      this.setState(
        state => ({
          images: [...state.images, ...data.hits],
          isLoading: false,
          error: '',
          totalPages: Math.ceil(data.totalHits / 12),
        })
      );

    } catch {
      this.setState({ error: 'Something went wrong 😿' });
      toast.error('Something went wrong 😿', {
        position: toast.POSITION.TOP_RIGHT,
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadMore = () => {
    this.setState(prevState => ({
      currentPage: prevState.currentPage + 1,
    }));
  };

  render() {
    const { images, isLoading, totalPages, currentPage } = this.state;

    return (
          <div>
        <Searchbar onSubmit={this.handleSubmit} />
       
        <ImageGallery images={images} />
        
        {isLoading && <Loader/>}
        {images.length > 0 && totalPages !== currentPage && !isLoading && (
          <Button onClick={this.loadMore}/>
        )}
        <ToastContainer />
          </div>
    );
  };
};

export default App;
