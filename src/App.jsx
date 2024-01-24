import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

import PrivateRoute from './routes/PrivateRoute';
import { useState, useEffect } from 'react';
import { getAllTeachers } from './redux/Teachers/TeachersOperations';
import { useDispatch } from 'react-redux';

function App() {
  const [color, setColor] = useState(null);
  const dispatch = useDispatch();
  const colors = {
    Blue: 'Blue',
    LightPink: 'LightPink',
    Green: 'Green',
    Orange: 'Orange',
    Pink: 'Pink',
  };

  useEffect(() => {
    dispatch(getAllTeachers());
  }, [dispatch]);

  useEffect(() => {
    setColor(
      Object.keys(colors)[
        Math.floor(Math.random() * Object.keys(colors).length)
      ]
    );
  }, []);

  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout color={color} />}>
          <Route index element={<Navigate to="Home" />} />
          <Route path="/Home" element={<HomePage color={color} />} />
          <Route path="/Teachers" element={<TeachersPage color={color} />} />
          <Route
            path="/Favorites"
            element={
              <PrivateRoute
                redirectTo="/"
                component={<FavoritesPage color={color} />}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
