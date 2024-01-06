import { Container, Blockconteiner,Title,Descreption,GetStartedBtn } from './HomePage.styled';


const Home = () => {
  return (
    <Container>
      <Blockconteiner>
        <Title>Unlock your potential with the best  <span>language</span> tutors</Title>
        <Descreption>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</Descreption>
        <GetStartedBtn>Get started</GetStartedBtn>
      </Blockconteiner>
    </Container>
  );
};

export default Home;
