import styled from '@emotion/styled';



export const HomeConteier = styled.div`
    margin-left: auto;
  margin-right: auto;
  padding: 0px 16px;
  width: 320px;

  @media screen and (min-width: 320px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    padding: 0px 32px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1400px;
    padding: 0px 64px;
  }
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction:column;
  gap: 0px 24px;
  margin-bottom: 24px;


  @media screen and (min-width: 320px) {
    
  }

  @media screen and (min-width: 768px) {
        flex-direction:row;
  }

  @media screen and (min-width: 1280px) {

  }
`;

export const Title = styled.h1`
  @media (min-width: 1280px) {
    width: 548px;
    margin-bottom: 32px;
    margin-top: 0px;
  }
    @media (max-width: 768px) {
    text-align:center;
    }

  color: var(--secondary);
  font-size: 48px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: -0.96px;
`;
export const Text = styled.span`
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;
  padding-right: 10px;
  border-radius: 12px;
  background-color: ${({ color }) =>
    color === 'Blue'
      ? 'var(--hoverColorBlue)'
      : color === 'Green'
      ? 'var(--hoverColorGreen)'
      : color === 'Orange'
      ? 'var(--hoverColorYellow)'
      : color === 'Pink'
      ? 'var(--hoverColorPink)'
      : color === 'LightPink'
      ? 'var(--hoverColorCoral)'
      : 'var(--hoverCecondary-text-color)'};
`;

export const Blockconteiner = styled.div`
  background-color: var(--secondary-white);
  border-radius: 30px;


      padding: 24px 16px;
              @media screen and (min-width: 768px) {
        @media screen and (max-width: 1279px) {
               max-width: 490px;
        }
              }
        @media screen and (min-width: 1280px) {
      padding: 98px 108px 98px 64px;
        }
`;

export const Img = styled.img`
      width: 300px;
      height: 350px;
    @media screen and (min-width: 1280px) {
      width: 568px;
      height: 530px;
    }
`
export const Descreption = styled.p`
  @media (min-width: 1280px) {
    width: 471px;
    margin-bottom: 64px;
  }
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.37;
  letter-spacing: -0.32px;
`;
export const GetStartedBtn = styled.button`
display: block;
  padding: 16px 88px;
  border: none;
  border-radius: 12px;
  height: 60px;
  background-color: ${({ color }) =>
    color === 'Blue'
      ? 'var(--colorBlue)'
      : color === 'Green'
      ? 'var(--colorGreen)'
      : color === 'Orange'
      ? 'var(--colorYellow)'
      : color === 'Pink'
      ? 'var(--colorPink)'
      : color === 'LightPink'
      ? 'var(--colorCoral)'
            : 'var(--cecondary-text-color)'};

      @media screen and (max-width: 768px) {
          margin-left:auto;
          margin-right:auto;
        }
              
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 24px;
  padding: 40px 20px;
  justify-content: center;
  align-items: center;
  margin-left: auto;
  margin-right: auto;

  border: 3px dashed
    ${({ color }) =>
      color === 'Blue'
        ? 'var(--colorBlue)'
        : color === 'Green'
        ? 'var(--colorGreen)'
        : color === 'Orange'
        ? 'var(--colorYellow)'
        : color === 'Pink'
        ? 'var(--colorPink)'
        : color === 'LightPink'
        ? 'var(--colorCoral)'
        : 'var(--cecondary-text-color)'};
  border-radius: 30px;


  @media screen and (min-width: 320px) {

  }

  @media screen and (min-width: 768px) {

  }
/* 
  @media screen and (max-width: 1280px) {
    max-width: 819px;

  } */
    @media screen and (min-width: 1280px) {
    gap: 100px;
    padding: 40px 0;
    }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const StyledCount = styled.span`
  font-size: 28px;
  line-height: 1.14;
  letter-spacing: -0.56px;
`;

export const StyledDescription = styled.span`
  width: 96px;
  font-size: 14px;
  line-height: 1.3;
  letter-spacing: -0.28px;
`;










import { NavLink } from "react-router-dom";

export const HomeStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

export const MainStyled = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  flex-shrink: 0;
  border-radius: 30px;
  background: var(--secondary-white);

  @media screen and (min-width: 768px) {
    padding: 49px 32px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    align-items: flex-start;
    width: 720px;
    height: 530px;
    padding: 98px 64px;
  }
`;

export const ImgThumbStyled = styled.div`
  width: 100%;
  height: 530px;
  flex-shrink: 0;
  position: relative;
  border-radius: 30px;
  background: ${colors.colorLightOrange};
  overflow: hidden;
  z-index: 1;
  @media screen and (min-width: 768px) {
    padding: 49px 32px;
  }

  @media screen and (min-width: ${mediaSizes.desktop}) {
    align-items: flex-start;
    max-width: 568px;
    padding: 98px 64px;
  }
  @media screen and (max-width: 768px) {
    height: 400px;
  }
`;

export const FaceImgStyled = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MacImgStyled = styled.img`
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  bottom: 0px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }

`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin-bottom: 64px;
  & h1 {
    color: ${colors.colorText};
    width: 100%;
    @media screen and (min-width: ${mediaSizes.desctop}) {
      max-width: 548px;
    }
  }

  & p {
    color: #121417;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.38;
    letter-spacing: -0.32px;
    width: 100%;
    @media screen and (min-width: ${mediaSizes.desctop}) {
      max-width: 471px;
    }
    
  }
  & span {
    color: ${colors.colorText};
  font-size: 48px;
  font-style: italic;
  font-weight: 400;
  line-height: 56px;
  letter-spacing: -0.96px;

  border-radius: 16px;
  background-color: ${colors.colorLightOrange};
  }
`;

export const ListStyled = styled.ul`
  padding: 40px 120px;
  width: 100%;
  border-radius: 30px;
  border: 1.5px dashed ${colors.colorOrange};

  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const ListItemStyled = styled.li`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  max-width: 100%;
`;

export const CountTextStyled = styled.p`
  color: ${colors.colorText};
  font-size: 28px;
  font-weight: 500;
  line-height: 1.14; /* 114.286% */
  letter-spacing: -0.56px;
`;

export const TextStyled = styled.p`
  width: 90px;
  color: ${colors.colorText};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.28px;
`;

export const User = styled(NavLink)`
  width: 80px;
  height: 80px;
  background: url(${({ img }) => img || avatar}) center ${colors.color3};
  background-size: cover;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 12px 12px 5px -5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transform: rotate(${({ id }) => Math.round(Math.random() * 10 - id) * 3}deg);
  ${transition("transform", "box-shadow")};

  &:hover {
    transform: scale(1.1);
    box-shadow: 16px 16px 8px -5px rgba(0, 0, 0, 0.1);
  }
`;