import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    /* :root {
        color: #0D0D22;
        color: #CD1F6C;
    } */

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Rubik', sans-serif;
        background-color: #EAEAEA;
        min-height: 100vh;
    }

    input, button {
        font-family: 'Rubik', sans-serif;
    }
    
    a, button {
        cursor: pointer;
    }

    ul {
        list-style: none;
    }

    img {
        max-width: 100%;
    }
`;
