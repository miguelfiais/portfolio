import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        font-family: 'Montserrat', sans-serif;
    }
    html {
        scroll-behavior: smooth;
    }
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: #000;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #26979F;
        border-radius: 8px;
    }
    .container{
        width: 100%;
        min-height: 100vh;
        height: 100%;
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