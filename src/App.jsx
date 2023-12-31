import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import HomePage from 'pages/HomePage/HomePage';
import TeachersPage from 'pages/TeachersPage/TeachersPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage'
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Teachers" element={<TeachersPage />} />
          <Route path="/Favorites" element={<FavoritesPage />}/>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
