import styled from 'styled-components';

//CONTAINER HOME
export const Container = styled.div`
background-color: #252222;
display: grid;
grid-template-columns: 1fr 1fr;
`

//LOGO
export const Logo = styled.img`
width: 70px;
height: 70px;
margin-left: 10%;
`

//CONTAINER BARRA
export const ContBarra = styled.div`
width: 100%;
height: 70px;
`
//UL BARRA
export const Ul = styled.ul`
list-style: none;
width: 100%;
height: 70px;
display: flex;
justify-content: space-around;
align-content: center;
text-align: center;
`

//LI BARRA
export const Li = styled.li`
cursor: pointer;
display: inline;
margin-top: 20px;
color: #FFFFFF;
width: 70px;
height: 25px;
font-family: "Sour Gummy", sans-serif;

    &:hover{
    background-color: #00ff43;
    border-radius: 10px;
    transition: 0.7s;
    }
`
//A
export const A = styled.a`
text-decoration: none;
color: #FFFFFF;
`