import { useDispatch, useSelector } from "react-redux";
import { Botao, Input } from "../contato/contato_styled";
import { RootState } from "../store";
import { contagem, somas } from "../store/reducers/count";
import { useState } from "react";

export const Testes = () => {

     //USESTATE
    const [vl, setVl] = useState<string>();

    //SELECTOR
    const seletor = useSelector((state: RootState) => state.contador);

    //DISPATCH
    const dispatch = useDispatch();

    //OBTENDO O MODIFICARDOR DO REDUX
    const func = () => {
        dispatch(contagem());
    }

    const fc2 = () => {
        dispatch(somas(10));
    }

    const apiGet = () => {
        fetch('https://6747492138c8741641d62c15.mockapi.io/users')
            .then(T => T.json())
            .then(console.log)

    }

    function cadastraUsuario(body: any) {
        console.log("entrei")
        console.log(body)
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Define o tipo do conteúdo como JSON
            },
            body: JSON.stringify(body), // Converte o objeto body em JSON
        };
        console.log(options)
        return fetch('https://6747492138c8741641d62c15.mockapi.io/users', options)
            .then(T => T.json())
    }

    return (
        <>
            {seletor.valor}
            <br />
            {seletor.vl2}
            <br />
            {vl}
            <Input onChange={(event) => setVl(event.target.value)} />
            <Botao onClick={func}>ADD</Botao>
            <Botao onClick={fc2}>OBTER</Botao>
            <Botao onClick={apiGet}>API GET</Botao>
            <Botao onClick={() => cadastraUsuario({ "name": 'Bruno', "username": 'Gonzaga',"createdAt":'2024',"avatar":'fefe' })
                .then(() => console.log('cadastrado'))
                .catch(() => console.log('falha ao cadastrar'))}>API POST</Botao>
        </>
    )
}