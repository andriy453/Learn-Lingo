import {
  HeaderContainer,
  LogoSvg,
  LogoText,
  LogoConteiner,
  Headera,
} from './Header.styled';
import AuthNav from '../AuthNav/AuthNav';
import sprite from '../../assets/sprite.svg';
import UserMenu from '../UserMenu/UserMenu';
import { selectIsAuth } from '../../redux/Auth/selectors';
import { useSelector } from 'react-redux';

export const Header = ({ color }) => {
  const isLoggedIn = useSelector(selectIsAuth);
  return (
    <Headera>
      <HeaderContainer>
        <LogoConteiner to="/Home">
          <LogoSvg>
            <use href={sprite + '#icon-ukraine'}></use>
          </LogoSvg>
          <LogoText>LearnLingo</LogoText>
        </LogoConteiner>
        {isLoggedIn ? <UserMenu color={color} /> : <AuthNav color={color} />}
      </HeaderContainer>
    </Headera>
  );
};
