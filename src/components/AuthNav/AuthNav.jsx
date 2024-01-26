import BtnLoginAndRegister from '../BtnLoginAndRegister/BtnLoginAndRegister';
import { Navigation, StyledLink } from './AuthNav.styled';
function AuthNav({ color, setNavstate }) {
  return (
    <>
      {setNavstate ? (
        <>
          <Navigation>
            <StyledLink color={color} to="/Home" onClick={() => setNavstate('closed')}>
              Home
            </StyledLink>
            <StyledLink color={color} to="/Teachers" onClick={() => setNavstate('closed')}>
              Teachers
            </StyledLink>
          </Navigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      ) : (
        <>
          <Navigation>
            <StyledLink color={color} to="/Home">Home</StyledLink>
            <StyledLink color={color} to="/Teachers">Teachers</StyledLink>
          </Navigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      )}
    </>
  );
}

export default AuthNav;
