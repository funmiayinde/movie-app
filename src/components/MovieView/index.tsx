import { MoviesItem } from '../../types';

import { motion } from 'framer-motion';

interface MoviesItemsProps {
  data: MoviesItem;
  movies: number;
  page: number;
}

const MoviesView: React.FC<MoviesItemsProps> = ({ data }) => {
  const { Poster, Title, Year, imdbID } = data;

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

  return (
    <motion.div key={`${imdbID}_${Year}`} variants={animation}>
      <div className="relative mx-auto mr-6 flex h-80 w-40 flex-shrink-0 flex-col items-start justify-start overflow-hidden md:mr-10 md:h-auto md:w-44">
        <img
          src={Poster}
          alt="movie-poster"
          className="mb-2 h-56 w-40 cursor-pointer rounded-lg transition-all delay-[2] ease-in hover:scale-90 md:h-64 md:w-44"
        />
        <h3 className="whitespace-pre-line text-left font-bold text-teal-500">{Title}</h3>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start justify-center">
            <div className="mb-1 flex text-sm font-bold">
              <h4 className="mr-2 text-white">Year</h4>
              <h4 className={`mt-[1px]`}>{data.Year}</h4>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MoviesView;
