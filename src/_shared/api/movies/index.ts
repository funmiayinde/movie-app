import axios from 'axios';

import { Movies } from '../../../types';

export const BASEURL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const movies = axios.create({
  baseURL: `${BASEURL}`,
});

async function getMoviesSearchRequest(data: {
  currentSearch?: string | null;
  page?: number;
}): Promise<Movies | undefined> {
  const { currentSearch, page } = data;
  try {
    console.log('findMovies-page:::', page);
    const response = await movies.request({
      method: 'get',
      url: '/',
      params: {
        apikey: `${API_KEY}`,
        s: currentSearch,
        page,
        type: 'movie',
      },
    });
    return response.data;
  } catch (e) {
    console.log('Error::', e);
    return;
  }
}

export { getMoviesSearchRequest };
