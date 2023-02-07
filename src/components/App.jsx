import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { FilmPage } from 'pages/FilmPage';
import { Actors } from 'pages/Actors';
import { Reviews } from 'pages/MovieRev';
import { Movies } from 'pages/SearchMovie';
import { Home } from 'pages/Home';

// const HomeView = lazy(() => import('../pages/Home.jsx'));
// const MoviesView = lazy(() => import('../pages/SearchMovie.jsx'));
// const FilmView = lazy(() => import('../pages/FilmPage.jsx'));
// const Actors = lazy(() => import('../pages/Actors.jsx'));
// const Reviews = lazy(() => import('../pages/MovieRev.jsx'));

export const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loader />}>
              <Movies />
            </Suspense>
          }
        />
        <Route
          path="movies/:itemId"
          element={
            <Suspense fallback={<Loader />}>
              <FilmPage />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Actors />
              </Suspense>
            }
          />
          <Route
            path="revievs"
            element={
              <Suspense fallback={<Loader />}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </Routes>
  </>
);
