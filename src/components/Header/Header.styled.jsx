import { Link } from 'react-router-dom';
import styled from 'styled-components';


export const Headera = styled.header`
    padding: 20px 0px;
`


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width:  100%;
  max-width: 320px;
  padding: 0 20px;
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }

  @media (min-width: 1280px) {
    max-width: 1184px;
    padding: 0 16px;
  }
`;

export const LogoSvg = styled.svg`
  width: 28px;
  height: 28px;
`

export const LogoConteiner = styled(Link)`
  display: flex;
  gap: 0px 8px;
  align-items:center;
`
export const LogoText = styled.span`
  color: #121417;
font-family: Roboto;
font-size: 20px;
font-style: normal;
font-weight: 500;
line-height: 24px; /* 120% */
letter-spacing: -0.4px;
`

