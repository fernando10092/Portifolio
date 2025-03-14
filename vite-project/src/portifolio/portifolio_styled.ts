import styled from 'styled-components';

//IMAGEM DE FUNDO
export const Background_styled = styled.div`
background-image: linear-gradient(#7B68EE, #4682B4);
width: 100%;
min-height: 100vh;
margin: 0px;
padding: 0px;
`
//COLUNAS
export const BackgroundColuns = styled.div`
display: grid;
grid-template-columns: 4fr 6fr;
@media (max-width: 700px) {
    grid-template-columns: auto;
  }
`

//
export const ColAbout = styled.div`
padding: 20px;
`

export const H5 = styled.h5`
background-color: rgb(1,1,1,0.8);
color: white;
`

export const Icone = styled.img`
width: 120px;
height: 120px;
margin-top: 70px;
@media (max-width: 700px) {
    width: 70px;
    height: 70px;
    }
` 

//
export const P = styled.p`
color: white;
margin: 10px;
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

////////////////////////////////////////

export const BackProjetos = styled.div`
background-color: #1C1C1C;
padding-top: 20px;
padding-bottom: 20px;
`

export const DivCard = styled.div`
display: grid;
grid-template-columns: auto auto auto auto;
margin: 0 auto;
background-color: #1C1C1C;
width: 100%;
text-align: center;
justify-content: center;
@media (max-width: 700px) {
grid-template-columns: auto;
}
`

export const Cards = styled.div`
margin: 10px;
max-width: 300px;
display: inline-block;
background-color: 	#FFFAFA;
border: Hidden;
&:hover{
background-color: #f0f0f0;
}
`

export const CardImg = styled.img`
width: 100%;
height: 200px;
object-fit: cover;
background-color: #1C1C1C;
`

export const H1project = styled.h1`
color: white;
text-align: center;
text-weight: bold;
font-size: 24px;
background-image: linear-gradient(#FFA500, #1C1C1C);
`