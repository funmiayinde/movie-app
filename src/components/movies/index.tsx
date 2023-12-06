// import { useEffect, useState, useRef } from 'react';
// import { useSearchParams, useLocation } from 'react-router-dom';
// import InfiniteScroll from 'react-infinite-scroll-component';

// import { useAppDispatch, useAppSelector } from '../../redux/store';
// import { findMovies } from '../../redux/middlewares';
// import { Loading } from '../Loading';
// import DefaultView from '../DefaultView';
// import MoviesView from '../MovieView';
// import { NotFound } from '../NotFound';
// import { MoviesItem } from '../../types';
import { motion } from 'framer-motion';

const Movies = () => {
  // const [searchParams] = useSearchParams();
  // const currentSearch = searchParams.get('query');
  // const [endFix, setEndFix] = useState<boolean>(true);
  // const { data: movies, totalResults, loading: isLoading } = useAppSelector((state) => state.movies);
  // const location = useLocation();
  // const [page, setPage] = useState<number>(
  //   location?.state?.details.movies === movies.length ? location?.state?.details.page + 1 : 1,
  // );
  // const dispatch = useAppDispatch();
  // const prevQuery = useRef<string | null | undefined>(null);
  // const pageRef = useRef<number | null | undefined>(null);

  // useEffect(() => {
  //   if (pageRef.current === page && prevQuery.current === currentSearch) {
  //     return;
  //   }

  //   if (prevQuery.current !== currentSearch && pageRef.current !== null) {
  //     setPage(1);
  //     setEndFix(true);
  //   }

  //   if (movies.length === totalResults) {
  //     setEndFix(false);
  //     pageRef.current = page;
  //     return;
  //   }

  //   if (prevQuery.current !== currentSearch && page === 1) {
  //     pageRef.current = null;
  //   }

  //   if (currentSearch && pageRef.current !== page) {
  //     dispatch(findMovies({ currentSearch, page }));
  //   }
  //   pageRef.current = page;
  //   prevQuery.current = currentSearch;
  // }, [dispatch, currentSearch, page, movies, totalResults]);

  // const showNextMovies = () => {
  //   if (movies.length !== 0) {
  //     setPage(page + 1);
  //   }
  // };

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
        {/* {movies.length !== 0 && currentSearch && (
          <InfiniteScroll
            dataLength={movies.length}
            next={showNextMovies}
            hasMore={endFix}
            scrollThreshold={1}
            loader={<Loading />}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginRight: '-15px',
              marginLeft: '-15px',
            }}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            className="mb-16 mt-4 max-h-max min-h-[100px] w-full gap-y-5 pl-4 sm:gap-y-8 sm:pl-0"
          >
            {movies && movies.length > 0 && (
              <div className="sma:px-0 flex w-full items-center justify-between px-4">
                <h3 className="mb-2 py-2 text-xl font-bold text-teal-400 md:text-2xl">
                  Search results: {totalResults}
                </h3>
                <h3 className="mb-2 py-2 text-xl font-bold text-teal-400 md:text-2xl ">
                  {totalResults > 10 ? 'Scroll down to load more' : ''}
                </h3>
              </div>
            )}
            <>
              {movies?.map((movie: MoviesItem) => {
                return <MoviesView key={movie.imdbID} data={movie} movies={movies.length} page={page} />;
              })}
            </>
          </InfiniteScroll>
        )} */}
      </motion.div>
      {/* {!currentSearch && <DefaultView />}
      {isLoading && movies.length === 0 && <Loading />}
      {movies.length === 0 && currentSearch && !isLoading && <NotFound />} */}
    </>
  );
};

export default Movies;
