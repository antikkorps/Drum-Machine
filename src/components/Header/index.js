import React from 'react';
import styled from 'styled-components';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Header({ isLight, handleToggleTheme }) {
  const location = useLocation();

  return (
    <Wrapper>
      <h1>Our Super music app</h1>
      <nav>
        <Link to='/'>
          <MenuEl isCurrentPage={location.pathname === '/'}>Home</MenuEl>
        </Link>
        <Link to='/about'>
          <MenuEl isCurrentPage={location.pathname === '/about'}>About</MenuEl>
        </Link>
        <Outlet />
      </nav>
      <button onClick={handleToggleTheme}>
        {' '}
        Switch to {isLight ? 'dark' : 'light'} theme
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  border-bottom: 1px solid;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:first-child {
    margin-right: 10px;
  }
`;

const MenuEl = styled.p`
padding-bottom: 2px;
border-bottom: solid 2px ${(props) =>
  props.isCurrentPage ? '' : 'transparent'};
&:hover {
  border-bottom: solid 2px`;
