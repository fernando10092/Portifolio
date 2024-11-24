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
grid-template-columns: auto auto;
`

//COLUNA 1
export const Coluna1 = styled.div`
text-align: center;
align-content: center;
`

//COLUNA 2
export const Coluna2 = styled.div`
margin: 0 auto;
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
//LABEL
export const Label = styled.label`

`

//INPUT
export const Input = styled.input`
width: 250px;
height: 40px;
display: block;
`

//TEXTAREA
export const TextArea = styled.textarea`
width: 250px;
height: 70px;
display: block;
`

//BOTAO
export const Botao = styled.button`
margin-top: 10px;
width: 200px;
heigh: 30px;
display: block;
background-color: #00ff43;
border: none;
color: white;
width: 250px;
height: 30px;
cursor: pointer;

&:hover{
background-color: black;
}
`

//DIVCARD
export const DivCard = styled.div`
width: 400px;
margin: 10px auto;
`
//IMGCARD
export const ImgCard = styled.img`
width: 100px;
height: 100px;
margin: auto;
`