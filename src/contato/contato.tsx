import { Background_styled, BackgroundColuns, Coluna1, Coluna2, Botao, DivCard, ImgCard } from "./contato_styled";
import { Barra } from "../headers/barra";
import logo from '../assets/design.png';

export const Contato = () => {
    return (
        <>
            <Background_styled>
                <Barra></Barra>
                <BackgroundColuns>
                    <Coluna1>
                        <DivCard className="card">
                            <ImgCard src={logo} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Contato</h5>
                                    <p className="card-text">Nome: Fernando de Lima</p>
                                    <p className="card-text">Telefone: (11) 99537-0943</p>
                                    <p className="card-text">E-mail: fernando100@windowslive.com</p>
                                </div>
                        </DivCard>
                    </Coluna1>
                    <Coluna2>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="nome" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">E-mail</label>
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
                            <label htmlFor="exampleFormControlInput1" className="form-label">Telefone</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="(XX) XXXXX-XXXX" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
                        </div>
                        <Botao>ENVIAR</Botao>
                    </Coluna2>
                </BackgroundColuns>
            </Background_styled>
        </>
    )
}