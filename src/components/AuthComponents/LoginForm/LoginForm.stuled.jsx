import styled from 'styled-components';
import '../../../index.css';

export const RegisterForm = styled.form`
  position: relative;
  margin: 0 auto;
  min-height: 420px;

  background: var( --background);
  border-radius: 30px;
  padding: 64px;
  margin-bottom: 20px;
  @media (min-width: 768px) {
    padding: 64px;
  }
`;

export const InputValidation = styled.div`
  margin-bottom: 14px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 18px;
  }
`;
export const ConfirmValidation = styled.div`
  margin-bottom: 40px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const Title = styled.h2`
  line-height:1.2;
  letter-spacing: -0.8px;
  font-weight: 500;
  margin-bottom: 20px;
  color: var(--secondar);
  @media (min-width: 768px) {
   font-size: 40px;
  }
`;
export const Text = styled.p`
  width: 438px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  margin-bottom:40px;
  color: rgba(18, 20, 23, 0.80);

`;

export const Validation = styled.p`
  margin-left: 15px;
  font-size: 12px;
  font-weight: 400;
  color: var(--red);
`;
export const ShowPassword = styled.button`
  position: absolute;
  right: 18px;
  top: 17px;
  background-color: transparent;
  border: none;
  padding: 0px;
  
  /* @media (min-width: 768px) {
    top: 10px;
    left: 90%;
  } */
`;
export const Input = styled.input`
  padding:  16px 18px;
  width: 100%;
  border-radius: 40px;
  outline: none;
  border-radius: 12px; 
  border: 1px solid rgba(18, 20, 23, 0.10);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.38;
  color: var(--secondar);
  &::placeholder{
  color: var(--secondar);
  }
  &.is-invalid {
    border-color: var(--red);
  }
`;

export const Button = styled.button`
  font-weight: 600;
  width: 100%;
  border: none;
  border-radius: 12px;
  color: var(--secondar);

  background-color: var(--yelow);

  padding: 16px 180px ;

  font-size: 18px;
  font-weight: 700;
  line-height: 1.56;
  @media (min-width: 768px) {

  }
`;
export const ButtonCloseModal = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  background-color:transparent;
  border: none;
`

export const Svg = styled.svg`
  stroke: var( --secondary);
  fill: none;
  width: 24px;
  height: 24px;
`;
export const SvgX = styled.svg`
  stroke: var( --secondary);
  fill: none;
  width: 32px;
  height: 32px;
`;

export const SvgEye = styled.svg`
  stroke: var( --secondary);
  fill: none;
  display: inline-block;
  width: 24px;
  height: 24px;
`;

