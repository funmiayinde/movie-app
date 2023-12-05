import { AnimatePresence } from 'framer-motion';
import './App.css';
import { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'

const AppLayout = lazy(() => import('./layout/app-layout'));

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
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<AppLayout />}>
                <Route path="/movies" element={<div>Hello world</div>} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
