import { FC } from 'react';
import { MovieList } from '../components/MovieList';
import AppLayout from '../layout/app-layout';
// import { NotFound } from '../components/NotFound';

const MoviesPage: FC = () => {
  return (
    <>
      <AppLayout />
      <MovieList />
    </>
  );
};
export default MoviesPage;
