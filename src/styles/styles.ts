import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --blue: #257CF4;
        --primary-dark: #0b0b0b;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        width: 100%;
        height: 100vh;
        
        color: #fff;
        background-size: cover;
        background-attachment: fixed;
        background: var(--primary-dark);

        overflow: hidden;
        -webkit-font-smoothing: antialiased;
    }
   body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600;
    }
    html {
        @media(max-width: 1080px) {
            font-size: 93.75% // 15px
        }
        @media(max-width: 720px) {
            font-size: 87.5%; // 14px
        }
    }
    button {
        cursor: pointer;
    }
    .transparent {
        border: 0;
        background: transparent;
    }
    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }
    #root {
        width: 100%;
        height: 100%;
        min-height: 100vh;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    .app {
        width: 400px;
        height: 700px;

        margin: auto;
        background: #FFF;
        border-radius: 1rem;

        position: relative;
    }
    .header {
        width: 100%;
        height: 80px;
        display: flex;
        justify-content: center;
        
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;

        box-shadow: 0 4px 10px #00000030;
    }
    .content {
        top: 80px;
        overflow-y: auto;
        position: relative;
    }
    @media(max-height: 700px) {
        .app {
            height: 90vh;
        }
    }
    @media(max-width: 400px) {
        .app {
            height: 100vh;
        }
    }
`;
