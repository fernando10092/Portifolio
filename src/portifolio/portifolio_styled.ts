import styled from 'styled-components';

//IMAGEM DE FUNDO
export const Background_styled = styled.div`
background-color: #364537;
width: 100vw;
height: 100vh;
margin: 0px;
padding: 0px;
`
//COLUNAS
export const BackgroundColuns = styled.div`
display: grid;
grid-template-columns: auto;
`

//COLUNA 1
export const Coluna1 = styled.div`
text-align: center;
align-content: center;
width: 70%;
max-height: 90vh;
margin: 10px auto;
border: solid;
border-radius: 50px;
display: flex;  
flex-wrap: wrap;
overflow: hidden;
`

export const Image = styled.img`
width: 400px;
height: 400px;
`

//TEXTO
export const TextMain = styled.h1`
color: #FFFFFF;
font-family: "Sour Gummy", sans-serif;
`
//SUB TEXTO
export const TextBelow = styled.p`
color: #FFFFFF;
font-family: 'Bokor', sans-serif; 
`

//H1
export const H1 = styled.h1`
color: white;
font-size: 28px;
text-align: center;
`

//A
export const A = styled.a`
text-decoration: none;
color: #00ff43;
&:hover{
color: black;
background-color: #00ff43;
}
`
