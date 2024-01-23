import { Navigation, StyledLink, LogOutBtn } from './UserMenu.stuled';
import { LoginLogo } from '../BtnLoginAndRegister/BtnLoginAndRegister.styled';
import { logOut } from '../../redux/Auth/AuthOperations';
import { useDispatch } from 'react-redux';

import sprite from '../../assets/sprite.svg';

function AuthNav({ color }) {
  const dispatch = useDispatch();
  return (
    <>
      <Navigation>
        <StyledLink to="/Home">Home</StyledLink>
        <StyledLink to="/Teachers">Teachers</StyledLink>
        <StyledLink to="/Favorites">Favorites</StyledLink>
      </Navigation>
      <LogOutBtn onClick={() => dispatch(logOut())}>
        <LoginLogo color={color}>
          <use href={sprite + '#icon-log-in-01'}></use>
        </LoginLogo>
        Log out
      </LogOutBtn>
    </>
  );
}

export default AuthNav;
