import styled from 'styled-components'

export const StyledHeader = styled.div`
  background-color: blue;
  padding: 20px ;
  border-radius: 20px;
  margin: 10px 30px 10px 30px;
`;


export const StyledNav = styled.div`
  display: flex;
  align-self: flex-end;
  justify-content: space-around;
  flex-direction: row;
  margin-bottom: 10px;

  a{
    color: black;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }

  @media ( max-width: ${({theme})=>theme.mobile}){
    flex-direction: column;
    align-items: center;

    a{
      margin: 5px;
    }
  }

`
