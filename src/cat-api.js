
import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_v9IRiRNekZOtN15p7IAmTWpgvWvDv4HUQH3SlilFU7kkBgfZmhCrXMM1xsxYek3F';

export function fetchBreeds() {
  return axios
    .get('https://api.thecatapi.com/v1/breeds')
    .then(response => response.data);
}

export function fetchCatByBreed(breedId) {
  return axios
    .get('https://api.thecatapi.com/v1/images/search?breed_ids=' + breedId)
    .then(response => response.data);
}