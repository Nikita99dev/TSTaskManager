import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('http://googleapis.com/css?family=Poppins:wght@300;400;600;700&display=swap');

  *{
    box-sizing: border-box;
  }

  #root {
    padding: 20px;
  }

  body {
    background:${({theme})=>theme.colors.body};
    color: hsl(198, 100% 9%);
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 10px;
    /* display: flex;
    justify-content: center; */
    /* display: flex;
    justify-content: center; */
  }

  p{
    opacity: 0.9;
    line-height: 1.5;
  }
`

export default GlobalStyle
