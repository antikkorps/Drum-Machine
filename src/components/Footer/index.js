import React from 'react';
import styled from 'styled-components';

export default function Footer() {
  return (
    <Wrapper>
      <h1>The Footer</h1>
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid;
`;
