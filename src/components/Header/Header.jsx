import { useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";

import {
  HeaderContainer,
  LogoSvg,
  LogoText,
  LogoConteiner,
  Headera
} from './Header.styled';
import AuthNav from '../AuthNav/AuthNav';
import sprite from '../../assets/sprite.svg'
import  UserMenu from '../UserMenu/UserMenu'



export const Header = ({color}) => {
  const [isLoggedIn, SetIsLoggedIn] = useState(true);

        const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
        if (user) {
            SetIsLoggedIn(true)
        }
        else {
         SetIsLoggedIn(false)
        }
    });
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
        
      {isLoggedIn ? <UserMenu /> : <AuthNav color={color} />} 
      
      </HeaderContainer>
    </Headera>


  );
};





