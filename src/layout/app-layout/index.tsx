import { createContext, useState } from 'react';
import { LayoutTypes } from '../../types';
import { motion } from 'framer-motion';
import Nav from '../../components/Nav';

export const NameContext = createContext<LayoutTypes | null>(null);

const AppLayout = () => {
  const [name, setName] = useState<string>('');
  const [searchPage, setSearchPage] = useState(false);
  const [sideNav, setSideNav] = useState(false);

  return (
    <>
      <motion.div className="items-cent flex h-auto w-full flex-col justify-end overflow-hidden bg-black">
        <NameContext.Provider
          value={{
            name: [name, setName],
            searchPage: [searchPage, setSearchPage],
            sideNav: [sideNav, setSideNav],
          }}
        >
          <Nav />
        </NameContext.Provider>
      </motion.div>
    </>
  );
};

export default AppLayout;
