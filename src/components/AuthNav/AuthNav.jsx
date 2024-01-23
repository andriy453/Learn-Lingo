import BtnLoginAndRegister from '../BtnLoginAndRegister/BtnLoginAndRegister'
import {
  Navigation,
  StyledLink,
} from './AuthNav.styled';
function AuthNav({ color }) {
  return (
    <>
      <Navigation>
        <StyledLink to="/Home">Home</StyledLink>
        <StyledLink to="/Teachers">Teachers</StyledLink>
      </Navigation>
      <BtnLoginAndRegister color={ color} />
    </>
  );
}

export default AuthNav;
