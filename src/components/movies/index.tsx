import { useEffect, useState, useRef } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';

// import { ScrollToTop, MoviesItem, StartFound, NotFound } from '../';

import { useAppDispatch, useAppSelector } from '../../redux/store';
import { findMovies } from '../../redux/middlewares';
import { Loading } from '../Loading';
import DefaultView from '../DefaultView';
import MoviesView from './MovieView';
import { NotFound } from '../NotFound';
import { MoviesItem } from '../../types';
import { motion } from 'framer-motion';

const Movies: React.FC = () => {
  const [searchParams] = useSearchParams();
  const currentSearch = searchParams.get('query');
  const [endFix, setEndFix] = useState<boolean>(true);
  const { data: movies, totalResults, loading: isLoading } = useAppSelector((state) => state.movies);
  const location = useLocation();
  const [page, setPage] = useState<number>(
    location?.state?.details.movies === movies.length ? location?.state?.details.page + 1 : 1,
  );
  const dispatch = useAppDispatch();
  const prevQuery = useRef<string | null | undefined>(null);
  const pageRef = useRef<number | null | undefined>(null);

  useEffect(() => {
    if (pageRef.current === page && prevQuery.current === currentSearch) {
      return;
    }

    if (prevQuery.current !== currentSearch && pageRef.current !== null) {
      setPage(1);
      setEndFix(true);
    }

    if (movies.length === totalResults) {
      setEndFix(false);
      pageRef.current = page;
      return;
    }

    if (prevQuery.current !== currentSearch && page === 1) {
      pageRef.current = null;
    }

    if (currentSearch && pageRef.current !== page) {
      dispatch(findMovies({ currentSearch, page }));
    }
    pageRef.current = page;
    prevQuery.current = currentSearch;
  }, [dispatch, currentSearch, page, movies, totalResults]);

  const showNextMovies = () => {
    if (movies.length !== 0) {
      setPage(page + 1);
    }
  };

  const animation = {
    initial: {
      x: '-10rem',
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        ease: 'easeInOut',
        duration: 1,
      },
    },
  };

  const pageVar = {
    initial: {
      opacity: 0,
      translateY: -20,
    },
    animate: {
      opacity: 1,
      translateY: 0,
    },
    exit: {
      opacity: 0,
      translateY: -20,
    },
    transition: {
      type: 'spring',
      duration: 3,
      ease: 'easeIn',
    },
  };

  return (
    <>
      <motion.div
        variants={pageVar}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          delay: 0.5,
          duration: 1,
        }}
        className="max-h-max min-h-[1000px] w-full bg-neutral-800 px-6 pb-2 pt-20 text-left md:px-20"
      >
        <motion.div
          variants={animation}
          initial="initial"
          animate="animate"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
            gridTemplateRows: 'repeat(auto-fill, minmax(200px, 1fr))',
            rowGap: '30px',
            columnGap: '30px',
          }}
          className="mb-16 mt-4 max-h-max min-h-[100px] w-full gap-y-5 pl-4 sm:gap-y-8 sm:pl-0"
        >
          {movies.length !== 0 && currentSearch && (
            <InfiniteScroll
              dataLength={movies.length}
              next={showNextMovies}
              hasMore={endFix}
              scrollThreshold={1}
              loader={<Loading />}
              className="mb-16 mt-4 max-h-max min-h-[100px] w-full gap-y-5 pl-4 sm:gap-y-8 sm:pl-0"
            >
              <>
                {movies?.map((movie: MoviesItem) => {
                  return <MoviesView key={movie.imdbID} data={movie} movies={movies.length} page={page} />;
                })}
              </>
            </InfiniteScroll>
          )}
        </motion.div>
        {!currentSearch && <DefaultView />}
        {isLoading && movies.length === 0 && <Loading />}
        {movies.length === 0 && currentSearch && !isLoading && <NotFound />}
      </motion.div>
    </>
  );
};

export default Movies;
