import {
  AuthNavConteiner,
  LinkLogin,
  LoginLogo,
  LinkRegister,
} from './BtnLoginAndRegister.styled';
import { useState } from 'react';
import Modal from '../Modal/Modal';

import Register from '../AuthComponents/RegisterForm/RegisterForm';
import Login from '../AuthComponents/LoginForm/LoginForm';

import sprite from '../../assets/sprite.svg';
function BtnLoginAndRegister({ color,regis,log,ShowModal }) {
  const [onClose, setOnClose] = useState(false);
  const [onCloseLogin, setOnCloseLogin] = useState(false);
  const hendleClickLogin = () => {
    if (ShowModal) {
      ShowModal(false)
      log(true)
    }
   setOnCloseLogin(!onCloseLogin)
  }
    const hendleClickRegister= () => {
    if (ShowModal) {
      ShowModal(false)
      regis(true)
    }
   setOnClose(!onClose)
 }

  return (
    <>
      <AuthNavConteiner>
        <LinkLogin onClick={hendleClickLogin}>
          <LoginLogo color={color}>
            <use href={sprite + '#icon-log-in-01'}></use>
          </LoginLogo>
          Log in
        </LinkLogin>
        <LinkRegister onClick={hendleClickRegister  }>
          Registration
        </LinkRegister>
      </AuthNavConteiner>
      {onClose && (
        <Modal onClose={setOnClose}>
          <Register onClose={setOnClose} />
        </Modal>
      )}
      {onCloseLogin && (
        <Modal onClose={setOnCloseLogin}>
          <Login onClose={setOnCloseLogin} />
        </Modal>
      )}
    </>
  );
}

export default BtnLoginAndRegister;
