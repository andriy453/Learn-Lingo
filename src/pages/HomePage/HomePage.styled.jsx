import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap:0px 24px;
  margin-bottom:24px;
  
`;

export const Title = styled.h1`
  @media (min-width: 1280px) {
    width: 548px;
    margin-bottom:32px;
    margin-top:0px;
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
  padding-right:10px;
  border-radius:12px;
  background-color: ${({ color }) =>
    color === "Blue"
      ? "var(--hoverColorBlue)"
      : color === "Green"
      ? "var(--hoverColorGreen)"
      : color === "Orange"
      ? "var(--hoverColorYellow)"
      : color === "Pink"
      ? "var(--hoverColorPink)"
      : color === "LightPink"
      ? "var(--hoverColorCoral)"
      : "var(--hoverCecondary-text-color)"};
`


export const Blockconteiner = styled.div`
background-color:var(--secondary-white);
border-radius: 30px;
padding: 98px 108px  98px  64px ;
`

export const Descreption = styled.p`
      @media (min-width: 1280px) {
    width: 471px;
    margin-bottom:64px
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
  height: 60px;
  background-color: ${({ color }) =>
    color === "Blue"
      ? "var(--colorBlue)"
      : color === "Green"
      ? "var(--colorGreen)"
      : color === "Orange"
      ? "var(--colorYellow)"
      : color === "Pink"
      ? "var(--colorPink)"
      : color === "LightPink"
      ? "var(--colorCoral)"
      : "var(--cecondary-text-color)"};

`


export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  width: 1310px;
  gap: 100px;
  padding: 40px 0;
  justify-content: center;
  align-items: center;
    margin-left:auto;
  margin-right:auto;
  max-width:1312px;
  border: 3px  dashed ${({ color }) =>
    color === "Blue"
      ? "var(--colorBlue)"
      : color === "Green"
      ? "var(--colorGreen)"
      : color === "Orange"
      ? "var(--colorYellow)"
      : color === "Pink"
      ? "var(--colorPink)"
      : color === "LightPink"
      ? "var(--colorCoral)"
            : "var(--cecondary-text-color)"};
  border-radius: 30px;
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
