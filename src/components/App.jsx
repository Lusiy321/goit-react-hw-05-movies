import { lazy, Suspense } from 'react';
import { Loader } from './Loader/Loader';
import { Home } from 'pages/Home';
import { Routes, Route } from 'react-router-dom';
import { Styles } from './Styles';
import { Navigation } from './Navigation/Navigation';

const HomeView = lazy(() => import('./pages/Home.jsx'));
const MoviesView = lazy(() => import('./pages/SearchMovie.jsx'));
const FilmView = lazy(() => import('./pages/FilmPage.jsx'));
const Cast = lazy(() => import('./pages/Actors.jsx'));
const Reviews = lazy(() => import('./pages/MovieRev.jsx'));

export const App = () => (
  <>
    <Styles />
    <Home></Home>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route
          index
          element={
            <Suspense fallback={<Loader />}>
              <HomeView />
            </Suspense>
          }
        />
        <Route
          path="movies"
          element={
            <Suspense fallback={<Loader />}>
              <MoviesView />
            </Suspense>
          }
        />
        <Route
          path="movies/:itemId"
          element={
            <Suspense fallback={<Loader />}>
              <FilmView />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<Loader />}>
                <Cast />
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
