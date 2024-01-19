import {
  Navigation,
  StyledLink,
} from './UserMenu.stuled';




function AuthNav() {

  return (

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

  )
}

export default AuthNav
