import React from 'react';
import styled from 'styled-components';
import { Outlet, Link, useLocation } from 'react-router-dom';

export default function Header() {
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
    </Wrapper>
  );
}

const Wrapper = styled.header`
  height: 8vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  align-items: center;
  & a {
    text-decoration: none;
    color: inherit;
  }
  & a:first-child {
    margin-right: 16px;
  }
`;

const MenuEl = styled.p`
font-size: 18px;
display: inline;
padding-bottom: 3px;
border-bottom: solid 2px ${(props) =>
  props.isCurrentPage ? '' : 'transparent'};
&:hover {
  border-bottom: solid 2px`;
