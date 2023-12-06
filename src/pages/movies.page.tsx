import { FC } from 'react';
import AllMovies from '../components/Movies';
import AppLayout from '../layout/app-layout';
// import { NotFound } from '../components/NotFound';

const MoviesPage: FC = () => {
  return (
    <>
      <AppLayout />
      <AllMovies/>
    </>
  );
};
export default MoviesPage;
