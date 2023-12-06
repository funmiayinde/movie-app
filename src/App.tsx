import { AnimatePresence } from 'framer-motion';
import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';
import { Loading } from './components/Loading';

const Movies = lazy(() => import('./pages/movies.page'));

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        closeButton={true}
        pauseOnHover={false}
      />
      <AnimatePresence>
        <BrowserRouter>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route path="/" element={<Movies />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
