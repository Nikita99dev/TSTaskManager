import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 5em;
  padding: 3em;
  max-width: 400px;
  max-height: 500px;
  background-color: white;
  border-radius: 20px;
  box-shadow:  12px 12px 1px 1px rgba(0, 0, 255, .2);
  opacity: 0.9;

  &:hover{
    opacity: 1;
    box-shadow: 13px 13px 2px 1px rgba(0, 0, 255, .2);
  }

  label{
    font-family: 'Courier New', Courier, monospace;
    font-style: italic;
  }

  h1{
    display: flex;
    justify-content: center;
    font-family: cursive;
  }

  button{
    margin:  5px;
  }
`
