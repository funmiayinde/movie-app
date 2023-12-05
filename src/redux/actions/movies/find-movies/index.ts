import { createActionString } from "../../../../_shared";
import { createAction } from '@reduxjs/toolkit';

export const FIND_MOVIES = createActionString('FIND_MOVIE', 'MOVIES');

const findMovies = createAction<[]>(FIND_MOVIES);

export { findMovies };