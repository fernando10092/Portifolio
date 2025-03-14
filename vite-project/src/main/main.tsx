import { BtnVeja, TitleMain, TitleName } from "./main_styled";
import { Barra } from "../headers/barra";
import vid from '../assets/video3.mp4';
import { ContVideo, Videos } from "./main_styled";
import { useState, useEffect } from "react";
import Load from "../load/load_components";

export const Home = () => {
    const [isloading, setIsloading] = useState<boolean>(true);

    useEffect(() => {
        // Simula carregamento por 2 segundos antes de remover o loading
        const timer = setTimeout(() => {
            setIsloading(false);
        }, 800);

        return () => clearTimeout(timer); // Limpa o timeout ao desmontar o componente
    }, []);

    return (
        <>
            <ContVideo>
                <Barra />
                <TitleName>FERNANDO DE LIMA GOMES</TitleName>
                {isloading ? "" : <TitleMain>FULL STACK DEVELOPER</TitleMain>}
                <a href="#about">
                    <BtnVeja>Find out more</BtnVeja>
                </a>
                {isloading ? <Load /> :
                    <Videos
                        src={vid}
                        autoPlay
                        loop
                        muted
                    />

                }

            </ContVideo>

        </>
    );
};
