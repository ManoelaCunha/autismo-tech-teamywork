import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    font-size: calc(8px + 2vmin);
    background-color: whitesmoke;
}
`;
