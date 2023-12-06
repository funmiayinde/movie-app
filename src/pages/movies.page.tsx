import { FC } from 'react';
// import Movies from '../components/Movies';
import AppLayout from '../layout/app-layout';
import DefaultView from '../components/DefaultView';

const MoviesPage: FC = () => {
  return (
    <>
      <AppLayout />
      <DefaultView />
    </>
  );
};
export default MoviesPage;
