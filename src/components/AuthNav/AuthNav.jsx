import {
  Navigation,
    StyledLink,
    AuthNavConteiner,
    LinkLogin,
    LoginLogo,
  LinkRegister,

} from './AuthNav.styled';

import sprite from '../../assets/sprite.svg'
function AuthNav() {
  return (
      <>
         <Navigation>
        <StyledLink to="/Home">
          Home
        </StyledLink>
        <StyledLink to="/Teachers">
          Teachers
        </StyledLink>
         <StyledLink to="/Favorites">
          Favorites
        </StyledLink>
          </Navigation>
          <AuthNavConteiner>
              <LinkLogin>
                  <LoginLogo>
                      <use href={ sprite + '#icon-log-in-01'}></use>
                  </LoginLogo>
                  Log in
              </LinkLogin>
              <LinkRegister>
                  Registration
              </LinkRegister>
          </AuthNavConteiner>
      </>
  )
}

export default AuthNav
