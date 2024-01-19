
import { Container, Blockconteiner, Title, Descreption, GetStartedBtn,Text,StyledList ,StyledItem ,StyledCount,StyledDescription} from './HomePage.styled';

import ImgYelow from '../../assets/ImgYelow.jpeg'
import imgGrean from '../../assets/imgGrean.jpeg'
import imgLighPink from '../../assets/imgLighPink.jpeg'
import imgPink from '../../assets/imgPink.jpeg'
import imgBlue from '../../assets/imgBlue.jpeg'
const Home = ({color}) => {
console.log(color)


  return (
    <>
        <Container>
      <Blockconteiner>
        <Title  >Unlock your potential with the best  <Text color={color}>language</Text> tutors</Title>
        <Descreption>Embark on an Exciting Language Journey with Expert Language Tutors: Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</Descreption>
        <GetStartedBtn color={color}>Get started</GetStartedBtn>
      </Blockconteiner>
      {color ===  "Blue" ?      <img src={imgBlue} alt='girlImg' /> : null }
      {color === "LightPink" ? <img src={imgLighPink} alt='girlImg' /> : null}
      {color === "Green" ? <img src={imgGrean} alt='girlImg'  /> : null}
      {color === "Orange" ? <img src={ImgYelow} alt='girlImg'  /> : null}
      {color === "Pink" ? <img src={imgPink} alt='girlImg'  /> : null}
      </Container>
      <footer>
        <StyledList color={color}>
        <StyledItem>
          <StyledCount>32,000 +</StyledCount>
          <StyledDescription>Experienced tutors</StyledDescription>
        </StyledItem>
        <StyledItem>
          <StyledCount>300,000 +</StyledCount>
          <StyledDescription>5-star tutor reviews</StyledDescription>
        </StyledItem>
        <StyledItem>
          <StyledCount>120 +</StyledCount>
          <StyledDescription>Subjects taught</StyledDescription>
        </StyledItem>
        <StyledItem>
          <StyledCount>200 +</StyledCount>
          <StyledDescription>Tutor nationalities</StyledDescription>
        </StyledItem>
      </StyledList>
    </footer>
    </>
  );
};

export default Home;
