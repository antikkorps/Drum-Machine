import styled from 'styled-components';

export default function Header({ isLight, handleToggleTheme }) {
  return (
    <Wrapper>
      <h1>Our Super music app</h1>
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
  padding: 0 24px;
  align-items: center;
  border-bottom: 1px solid;
`;
