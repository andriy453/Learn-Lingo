import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  @media (min-width: 1280px) {
    width: 548px;
  }

color: var( --secondary);
font-size: 48px;
font-style: normal;
font-weight: 500;
line-height: 1.17;
letter-spacing: -0.96px;
  &span{

  }
`;

export const Blockconteiner = styled.div`
background-color:var(--secondary-white);
border-radius: 30px;
padding: 98px 108px  98px  64px ;
`

export const Descreption = styled.p`
      @media (min-width: 1280px) {
  width: 471px;
  }
color: var( --secondary);
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height:1.37;
letter-spacing: -0.32px;
`
export const GetStartedBtn = styled.button`

padding: 16px 88px;
border: none;
border-radius: 12px;
background: #9FBAAE;

`

