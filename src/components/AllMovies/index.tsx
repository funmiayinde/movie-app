import { motion } from "framer-motion";

export const AllMovies = () => {
  return (
    <>
      <motion.div
        // variants={pageVar}
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
