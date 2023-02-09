import { createGlobalStyle } from "styled-components";
import fontCustomized from "./font";

const GlobalStyles = createGlobalStyle`
${fontCustomized}
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100vh;
        background-color: #0621a0;
        color: #fff;
        font-family: 'Poppins', sans-serif;
    }
`;

export default GlobalStyles;
