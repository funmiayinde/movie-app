import { RootState } from "../../store";

export const movies = (state: RootState) =>  state.movies.data;
export const totalMoviesResults = (state: RootState) =>  state.movies.totalResults;
export const isLoading = (state: RootState) =>  state.movies.loading;