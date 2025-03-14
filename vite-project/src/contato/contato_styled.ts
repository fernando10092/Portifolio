import styled from 'styled-components';

//IMAGEM DE FUNDO
export const Background_styled = styled.div`
background-image: linear-gradient(	#FFA500, black);
width: 100%;
min-height: 100vh;
margin: 0px;
padding: 0px; 
`
//COLUNAS
export const BackgroundColuns = styled.div`
display: grid;
grid-template-columns: auto auto;
@media (max-width: 700px) {
    grid-template-columns: auto;
  }
`

//COLUNA 1
export const Coluna1 = styled.div`
text-align: center;
align-content: center;
margin-top: 80px;

`

//COLUNA 2
export const Coluna2 = styled.div`
width: 70%;
margin-top: 80px;
@media (max-width: 700px) {
    padding: 20px;
  }
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
background-image: linear-gradient( #1C1C1C,#FFA500);
border: none;
color: white;
width: 250px;
height: 30px;
cursor: pointer;

&:hover{
background-image: linear-gradient(#FFA500, #1C1C1C);
}
`

//DIVCARD
export const DivCard = styled.div`
width: 400px;
margin: 10px auto;
@media (max-width: 700px) {
    width: 300px;
    margin-top: 350px;
  }
`
//IMGCARD
export const ImgCard = styled.img`
width: 100px;
height: 100px;
margin: auto;
`