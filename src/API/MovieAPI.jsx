import axios from 'axios';

const KEY = 'f753ddb9b7c22c6c336bfdc87099e2ae';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchPopularMovie() {
  try {
    const resp = await axios.get(`/trending/movie/week?api_key=${KEY}`);
    return resp.data.results;
  } catch (e) {
    throw new Error();
  }
}

export async function fetchMovieName(name) {
  try {
    const resp = await axios.get(`/search/movie?api_key=${KEY}&query=${name}`);
    return resp.data.results;
  } catch (e) {
    throw new Error();
  }
}

export async function fetchMovieId(id) {
  try {
    const res = await axios.get(`/movie/${id}?api_key=${KEY}&language=en-US`);
    return res.data;
  } catch (e) {
    throw new Error();
  }
}

export async function fetchMovieAct(id) {
  try {
    const res = await axios.get(
      `/movie/${id}/credits?api_key=${KEY}&language=en-US`
    );
    return res.data.cast;
  } catch (e) {
    throw new Error();
  }
}

export async function fetchMovieRev(id) {
  try {
    const resp = await axios.get(
      `/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`
    );
    return resp.data;
  } catch (e) {
    throw new Error();
  }
}
