import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px 28px;
`;

export const StyledLink = styled(Link)`
    color: var(--secondary);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25;
    padding: 10px 0px ;
`;
