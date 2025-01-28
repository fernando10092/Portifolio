import styled from 'styled-components';

//IMAGEM DE FUNDO
export const Background_styled = styled.div`
background-color: #7B68EE;
width: 100%;
height: 100vh;
margin: 0px;
padding: 0px;
`
//COLUNAS
export const BackgroundColuns = styled.div`
display: grid;
grid-template-columns: auto auto;
`

//
export const ColAbout = styled.div`
padding: 20px;
`

export const H5 = styled.h5`
background-color: rgb(1,1,1,0.8);
color: white;
`

//
export const P = styled.p`
color: white;
margin: 10px;
height: 400px;
padding: 10px;
font-size: 14px;
text-align: justify;
`

//COLUNA 1
export const Coluna1 = styled.div`
text-align: center;
align-content: center;
width: 100%;
margin: 10px auto;
border: none;
display: flex;      
flex-wrap: wrap;
overflow: hidden;
padding: 40px;
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
margin-top: 90px;
`

//A
export const A = styled.a`
text-decoration: none;
color: white;
font-weight: bold;
background-color: rgb(1,1,1,0.8);
&:hover{
color: black;
background-color: black;
color: white;
}
`
