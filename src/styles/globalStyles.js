import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Montserrat', sans-serif;
    }
    .container{
        width: 100vw;
        height: 100vh;
        background: rgb(32,32,32);
        background: linear-gradient(0deg,rgb(32,32,32) 0%,rgb(16,16,16) 100%);
    }
    button, a{
        cursor: pointer;
    }
    button{
        border: none;
    }
    button:active{
        opacity: 0.8;
    }
`
export default Global