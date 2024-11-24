import { Background_styled, BackgroundColuns, Coluna1, H1, A } from "./portifolio_styled";
import { Barra } from "../headers/barra";
import capa from '../assets/Capa.png';
import efood from '../assets/efood.png';
import calc from '../assets/calc.png';


export const Portifolio = () => {
    return (
        <>
            <Background_styled>
                <Barra></Barra>
                <BackgroundColuns>
                <H1>Projetos em destaque</H1>
                    <Coluna1>
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={capa} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Site de Casamento</h5>
                                        <p><A href="https://github.com/fernando10092/Casamento">https://github.com/fernando10092/Casamento</A></p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={efood} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Site de Compras</h5>
                                        <p><A href="https://github.com/fernando10092/Site_Compras">https://github.com/fernando10092/Site_Compras</A></p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={calc} className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p><A href="https://github.com/fernando10092/react">https://github.com/fernando10092/react</A></p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </Coluna1>
                </BackgroundColuns>
            </Background_styled>
        </>
    )
}