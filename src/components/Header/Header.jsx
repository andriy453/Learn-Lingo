import {
  HeaderContainer,
  Navigation,
  StyledLink,
} from './Header.styled';


export const Header = () => {

  return (
    <HeaderContainer>
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
    </HeaderContainer>
  );
};
