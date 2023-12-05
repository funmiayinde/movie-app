import { useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/store';
import { useLocation } from 'react-router-dom';
import { findMovies as findAllMovies } from '../../redux/middlewares';

interface UseMoviesReturnType {
  key: string;
  searchQuery?: string;
}
export const useMovies = ({ searchQuery }: UseMoviesReturnType) => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const { data: movies, totalResults, loading } = useAppSelector((state) => {
    return state.movies
  });

  const [page, setPage] = useState<number>(
    location?.state?.details.movies === movies?.length ? location.state?.details.page + 1 : 1,
  );
  const [endFix, setEndFix] = useState<boolean>(true);

  const prevQuery = useRef<string | null | undefined>(null);
  const pageRef = useRef<number | null | undefined>(null);

  const showNextMovies = () => {
    if (movies?.length !== 0) {
      setPage(page + 1);
    }
  };

  const findMovies = ({ searchQuery, page }: { searchQuery: string; page: number }) => {
    dispatch(findAllMovies({ currentSearch: searchQuery, page }));
  };

  useEffect(() => {
    if (pageRef.current === page && prevQuery.current === searchQuery) {
      return;
    }
    if (pageRef.current !== page && prevQuery.current !== null) {
      setPage(1);
      setEndFix(true);
    }
    if (movies?.length === totalResults) {
      setEndFix(false);
      pageRef.current = page;
      return;
    }
    if (prevQuery.current !== searchQuery && page === 1) {
      pageRef.current = null;
    }
    if (searchQuery && pageRef.current !== page) {
      dispatch(findAllMovies({ currentSearch: searchQuery, page }));
    }
    pageRef.current = page;
    prevQuery.current = searchQuery;
  }, [dispatch, searchQuery, page, movies, totalResults]);
  return {
    loading,
    movies,
    endFix,
    page,
    pageRef,
    totalResults,
    showNextMovies,
    findMovies,
  };
};
