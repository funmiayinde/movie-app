import { ChangeEvent, useContext, useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { NameContext } from '../../layout/app-layout';
import { motion } from 'framer-motion';
import search from '../../assets/svgs/icons8-search.svg';
import { toast } from 'react-toastify';
import { useAppDispatch } from '../../redux/store';
import { findMovies } from '../../redux/actions';

const Nav = () => {
  const [searchParams] = useSearchParams();
  const currentSearch = searchParams.get('query');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [query, setQuery] = useState<string | null>(() => currentSearch);

  const NavContext = useContext(NameContext);

  const navVariant = {
    initial: {
      opacity: 0,
      translateY: -20,
    },
    animate: {
      opacity: 0,
      translateY: -20,
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

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleOnSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!query) {
      toast.error("You didn't enter anything");
      return;
    }
    if (query === currentSearch) {
      return;
    }
    navigate(`/?query=${query}`);
    dispatch(findMovies([]));
  };

  return (
    <motion.nav
      variants={navVariant}
      //   initial="initial"
      //   animate="animate"
      exit="exit"
      transition={{
        delay: 0.5,
        duration: 1,
      }}
      className="absolute left-0 top-0 z-10 flex h-20 w-full items-center justify-between bg-gradient-to-b from-black to-transparent px-6 transition-all delay-[3] ease-out md:px-20"
    >
      <Link to="/" className="-mt-2 mr-10 text-2xl font-bold text-white md:mt-0">
        Movie App
      </Link>
      <div className="flex w-full items-center justify-end">
        <button
          onClick={() => NavContext?.searchPage[1](true)}
          className="-mt-0.5 mr-4 border-none bg-transparent p-0 outline-none md:mr-5 md:mt-1 lg:hidden"
        >
          <img src={search} alt="search" className="h-8 w-8" />
        </button>
        <div className="-ml-28 hidden w-[calc(100%-20%)] items-center md:justify-end lg:-ml-0 lg:flex">
          <form onSubmit={handleOnSearch} className="relative mr-10 mt-1 block h-auto w-full">
            <div className="relative mr-10 mt-1 block h-auto w-full">
              <input
                type="search"
                name="movie-search"
                value={query ?? ''}
                onChange={handleChangeInput}
                placeholder="Search for your favorite movies"
                className="my-1 h-10 w-full rounded-full border-none bg-neutral-800 px-4 text-sm font-bold text-white outline-none placeholder:font-medium placeholder:text-neutral-50 lg:-ml-0"
              />
            </div>
          </form>
          <Link
            to="/"
            className="delay-3 mr-10 py-5 text-lg font-bold text-white transition-all ease-out hover:text-teal-400  hover:shadow-[0px_2px_0px_#2dd4bf]"
          >
            Home
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};
export default Nav;
