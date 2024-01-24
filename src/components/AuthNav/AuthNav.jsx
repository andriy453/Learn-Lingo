import BtnLoginAndRegister from '../BtnLoginAndRegister/BtnLoginAndRegister';
import { Navigation, StyledLink } from './AuthNav.styled';
function AuthNav({ color, setNavstate }) {
  return (
    <>
      {setNavstate ? (
        <>
          <Navigation>
            <StyledLink to="/Home" onClick={() => setNavstate('closed')}>
              Home
            </StyledLink>
            <StyledLink to="/Teachers" onClick={() => setNavstate('closed')}>
              Teachers
            </StyledLink>
          </Navigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      ) : (
        <>
          <Navigation>
            <StyledLink to="/Home">Home</StyledLink>
            <StyledLink to="/Teachers">Teachers</StyledLink>
          </Navigation>
          <BtnLoginAndRegister color={color} setNavstate={setNavstate} />
        </>
      )}
    </>
  );
}

export default AuthNav;
