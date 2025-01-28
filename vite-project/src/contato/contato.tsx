import { Background_styled, BackgroundColuns, Coluna1, Coluna2, Botao, DivCard, ImgCard } from "./contato_styled";
import logo from '../assets/design.png';
import { useState } from "react";

export const Contato = () => {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [telefone, setTelefone] = useState<string>("");
    const [msg, setMsg] = useState<string>("");

    const getCsrfToken = (): string => {
        const csrfCookie = document.cookie
            .split("; ")
            .find((row) => row.startsWith("csrftoken="));
        return csrfCookie ? csrfCookie.split("=")[1] : "";
    };

    const Sender = async (event: React.FormEvent) => {
        event.preventDefault();
        const csrfToken = getCsrfToken();

        const dados = {
            name: name,
            email: "fernando100@windowslive.com",
            telefone: telefone,
            msg: msg,
        };

        try {
            const response = await fetch("http://127.0.0.1:8000/envio/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": csrfToken, // Sempre será string
                },
                body: JSON.stringify(dados),
            });

            if (response.ok) {
                alert("Mensagem enviada com sucesso");
                setName("")
                setEmail("")
                setTelefone("")
                setMsg("")
            } else {
                alert("Erro ao enviar mensagem");
            }
        } catch (e) {
            alert("Erro ao enviar mensagem");
        }
    };



    return (
        <>
            <Background_styled>
                <BackgroundColuns>
                    <Coluna1>
                        <DivCard className="card">
                            <ImgCard src={logo} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Contato</h5>
                                <p className="card-text">Nome: Fernando de Lima</p>
                                <p className="card-text">Telefone: (11) 99537-0943</p>
                                <p className="card-text">E-mail: fernando100@windowslive.com</p>
                            </div>
                        </DivCard>
                    </Coluna1>
                    <Coluna2>
                        <form onSubmit={Sender}>
                            {/* Formulário */}
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Nome</label>
                                <input onChange={(event) => setName(event.target.value)} value={name} name="nameInp" type="text" className="form-control" id="exampleFormControlInput1" placeholder="nome" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">E-mail</label>
                                <input onChange={(event) => setEmail(event.target.value)} value={email} name="emailInp" type="email" className="form-control" id="exampleFormControlInput1" placeholder="nome@exemplo.com" />
                                <label htmlFor="exampleFormControlInput1" className="form-label">Whatsapp</label>
                                <input onChange={(event) => setTelefone(event.target.value)} value={telefone} name="telInp" type="text" className="form-control" id="exampleFormControlInput1" placeholder="(XX) XXXXX-XXXX" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea placeholder="Digite sua mensagem..." onChange={(event) => setMsg(event.target.value)} value={msg} name="msgInp" className="form-control" id="exampleFormControlTextarea1"></textarea>
                            </div>
                            <Botao type="submit">ENVIAR</Botao>
                        </form>
                    </Coluna2>
                </BackgroundColuns>
            </Background_styled>
        </>
    )
}