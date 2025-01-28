import { BtnVeja, TitleMain, TitleName } from "./main_styled";
import { Barra } from "../headers/barra";
import vid from '../assets/video.mp4';
import { ContVideo, Videos } from "./main_styled";

export const Home = () => {
    return (
        <>
            <ContVideo>
            <Barra></Barra>
            <TitleName>FERNANDO DE LIMA GOMES</TitleName>
            <TitleMain>DESENVOLVEDOR FULL-STACK</TitleMain>
            <a href="#portifolio"><BtnVeja>Veja Mais</BtnVeja></a>
                <Videos
                    src={vid} // Substitua pelo caminho do seu vídeo local ou um link público válido
                    autoPlay
                    loop
                    muted
                >
                </Videos>
            </ContVideo>
        </>
    )
}