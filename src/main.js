import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader'); // span.loader

form.addEventListener('submit', handleSubmit);

function showLoader() {
  loader.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}

async function handleSubmit(event) {
  event.preventDefault();
  const searchQuery = event.target.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term',
      position: 'topRight',
    });
    return;
  }

  showLoader();
  clearGallery();

  try {
    const data = await getImagesByQuery(searchQuery);

    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
    });
  } finally {
    hideLoader();
    form.reset();
  }
}
