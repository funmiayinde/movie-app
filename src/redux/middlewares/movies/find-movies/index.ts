/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movies } from '../../../../types';
import { FIND_MOVIES } from '../../../actions/movies';
import { getMoviesSearchRequest } from '../../../../_shared';
import { toast } from 'react-toastify';

const findMovies = createAsyncThunk<Movies, { currentSearch?: string | null; page?: number }, { rejectValue: never }>(
  FIND_MOVIES,
  async (data, { rejectWithValue }: any) => {
    try {
      const response = await getMoviesSearchRequest(data);
      if (response?.Error) {
        toast.error(response?.Error);
      }
      return response;
    } catch (err) {
      return rejectWithValue(err);
    }
  },
);

export { findMovies };
