import { FC } from 'react';
import { Movies } from '../components/Movies';
import AppLayout from '../layout/app-layout';
// import { NotFound } from '../components/NotFound';

const MoviesPage: FC = () => {
  return (
    <>
      <AppLayout />
      <Movies />
    </>
  );
};
export default MoviesPage;
