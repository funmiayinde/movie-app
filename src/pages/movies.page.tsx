import { FC } from 'react';
import { AllMovies } from '../components/AllMovies';
import AppLayout from '../layout/app-layout';
// import { NotFound } from '../components/NotFound';

const MoviesPage: FC = () => {
  return (
    <>
      <AppLayout />
      <AllMovies />
    </>
  );
};
export default MoviesPage;
