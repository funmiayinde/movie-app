import axios from 'axios'

import { Movies } from '../../../types'

export const BASEURL = import.meta.env.VITE_BASE_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const movies = axios.create({
  baseURL: `${BASEURL}`
})

async function getMoviesSearchRequest(data: {
  currentSearch: string | null
  page: number
}): Promise<Movies | undefined> {
  const { currentSearch, page } = data;
  try{
    const response = await movies.get(`/?apikey=${API_KEY}&s=${currentSearch}&type=movie&page=${page}`);
    return response.data;
  }catch(e){
    console.log('Error::', e);
    return;
  }
}

export { getMoviesSearchRequest };
