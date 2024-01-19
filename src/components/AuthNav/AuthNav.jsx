import {
  Navigation,
    StyledLink,
    AuthNavConteiner,
    LinkLogin,
    LoginLogo,
  LinkRegister,

} from './AuthNav.styled';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import Register from '../AuthComponents/RegisterForm/RegisterForm';
import Login from '../AuthComponents/LoginForm/LoginForm'

import sprite from '../../assets/sprite.svg'
function AuthNav({color}) {
  const [onClose, setOnClose] = useState(false);
  const [onCloseLogin, setOnCloseLogin] = useState(false);
  console.log(color)
  return (
      <>
         <Navigation>
        <StyledLink to="/Home">
          Home
        </StyledLink>
        <StyledLink to="/Teachers">
          Teachers
        </StyledLink>
          </Navigation>
          <AuthNavConteiner>
              <LinkLogin  onClick={()=>setOnCloseLogin(!onCloseLogin)}>
                  <LoginLogo color={color}>
                      <use href={ sprite + '#icon-log-in-01'}></use>
                  </LoginLogo>
                  Log in
              </LinkLogin>
              <LinkRegister onClick={()=>setOnClose(!onClose)}>
                  Registration
              </LinkRegister>
      </AuthNavConteiner>
      {onClose && <Modal onClose={setOnClose}> <Register onClose={setOnClose} /> </Modal>}
      {onCloseLogin && <Modal onClose={setOnCloseLogin}> <Login onClose={setOnCloseLogin}/> </Modal> }
      </>
  )
}

export default AuthNav
