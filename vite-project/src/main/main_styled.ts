import styled from 'styled-components';

//VIDEOS
export const ContVideo = styled.div`
background-color: black;
height: 100vh;
width: 100%;
position: relative;
`

export const Videos = styled.video`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
object-fit: cover;
`

//IMAGEM DE FUNDO
export const Background_styled = styled.div`
background-color: #364537;
width: 100vw;
height: 100vh;
margin: 0px;
padding: 0px;
position: absolute;
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
text-align: center;
align-content: center;
`

export const Image = styled.img`
width: 400px;
height: 400px;
`

//TEXTO
export const TextMain = styled.h1`
color: #FFFFFF;
font-family: "Sour Gummy", sans-serif;
z-index: 10;
`
//SUB TEXTO
export const TextBelow = styled.p`
color: #FFFFFF;
font-family: 'Bokor', sans-serif; 
`

//BOTAO VEJA MAIS
export const BtnVeja = styled.button`
background-color: rgb(1,1,1,0.9);
width: 300px;
height: 50px;
z-index: 10;
position: absolute;
top: 50%;
right: 10%;
color: white;
border-radius: 10px;
border: none;
&:hover{
background-color: #DC143C;
color: rgb(1,1,1,0.7);
transition: 0.5s;
font-size: 20px;
font-weight: bold;
}
`

export const TitleName = styled.h1`
font-size: 38px;
color: white;
position: absolute;
top: 40%;
left: 10%;
Z-index: 10;
`

export const TitleMain = styled.h1`
font-size: 32px;
color: white;
position: absolute;
top: 50%;
left: 10%;
Z-index: 10;
`