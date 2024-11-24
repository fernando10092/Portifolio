import { Background_styled, BackgroundColuns, Coluna1, Coluna2, TextMain, TextBelow, Image } from "./main_styled";
import { Barra } from "../headers/barra";
import image from '../assets/logo.png';

export const Home = () => {
    return (
        <>
            <Background_styled>
                <Barra></Barra>
                <BackgroundColuns>
                    <Coluna1>
                        <TextMain>
                            EU SOU UM <br/>PROGRAMADOR
                        </TextMain>
                        <TextBelow>
                            Seja bem-vindo(a)
                        </TextBelow>
                    </Coluna1>
                    <Coluna2>
                    <Image src={image}/>
                    </Coluna2>
                </BackgroundColuns>
            </Background_styled>
        </>
    )
}