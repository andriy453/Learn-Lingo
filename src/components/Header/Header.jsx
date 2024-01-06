import { useState } from 'react';

import {
  HeaderContainer,
  LogoSvg,
  LogoText,
  LogoConteiner,
  Headera
} from './Header.styled';
import AuthNav from '../AuthNav/AuthNav';
import sprite from '../../assets/sprite.svg'



export const Header = () => {
  const [isLoggedIn, SetIsLoggedIn] = useState(true);
  return (
    <Headera>
          <HeaderContainer>
      <LogoConteiner to="/Home">
        <LogoSvg>
        <use href={sprite + '#icon-ukraine'}  ></use>
        </LogoSvg>
        <LogoText>
          LearnLingo
        </LogoText>
    </LogoConteiner>
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />}  */}
      <AuthNav />
    </HeaderContainer>
    </Headera>
  );
};
