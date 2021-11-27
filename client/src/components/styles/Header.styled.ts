import styled from 'styled-components'

export const StyledHeader = styled.div`
  background-color: blue;
  padding: 20px 0;
`;


export const StyledNav = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 20px;

  a{
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  @media ( max-width: ${({theme})=>theme.mobile}){
    flex-direction: column;
  }

`
