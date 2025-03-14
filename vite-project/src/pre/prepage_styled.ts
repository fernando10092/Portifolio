import styled from 'styled-components';

export const ContainerInit = styled.div`
max-width: 100vw;
max-height: 100%;
overflow: hidden;
`

export const Video = styled.video`
width: 100%;
height: 100%;
object-fit: cover;
position: fixed;
`

export const TextVideo = styled.h1`
color: white;
position: fixed;
z-index: 1;
top: 47%;
left: 43%;
animation: fadeIn 1s ease-in-out;
height: 210px;
text-align: center;
font-size: 25px;
@media (max-width: 700px) {
    top: 50%;
    left: 23%;
    font-size: 9px;
    }
`

export const TextVideo2 = styled.h1`
margin: 0 auto;
margin-top: 100px;
color: white;
background-color: rgb(1,1,1,0.5);
animation: fadeIn 1s ease-in-out;
cursor: pointer;
border-radius: 10px;
width: 200px;
text-align: center;
align-content: center;
font-size: 38px;
&:hover{
  background-color: rgb(1,1,1,0.8);
  }
  @media (max-width: 700px) {
    top: 10%;
    font-size: 40px;
    }
`