import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/SearchMovie'));
const FilmPage = lazy(() => import('../pages/FilmPage'));
const Actors = lazy(() => import('../pages/Actors'));
const Reviews = lazy(() => import('../pages/MovieRev'));

export const App = () => (
  <>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/goit-react-hw-05-movies" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:itemId" element={<FilmPage />}>
            <Route path="cast" element={<Actors />} />
            <Route path="revievs" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  </>
);
