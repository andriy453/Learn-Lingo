import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledLink = styled(Link)`
  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25;
  padding: 10px 0px;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const LogOutBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0px 8px;
  background-color: transparent;
  border: none;

  color: var(--secondary);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25;
  @media (max-width: 768px) {
    font-size: 24px;
  }
`;
