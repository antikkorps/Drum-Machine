import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
    transition: linear 0.25s;
    background-Color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.mainColor};
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
}
button {
    font-family: 'Montserrat', sans-serif;
    padding : 12px 20px;
    color: ${(props) => props.theme.mainColor};
    background-Color: ${(props) => props.theme.backgroundColor};
    cursor: pointer;
    boder: 1px solid;
    transition: linear 0.25s;
}
button:hover {
    background-Color: ${(props) => props.theme.mainColor};
    color: ${(props) => props.theme.backgroundColor};
}
h1, h2, h3, h4, h5, h6 {
    letter-spacing: 2px;
h1 {
    font-size: 1.2rem;
}
h2 {
    font-size: 1.1rem;

`;

export default GlobalStyle;
