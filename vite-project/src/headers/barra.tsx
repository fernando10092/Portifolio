import { Container, ContBarra, Ul, Li, A } from "./barra_styled";
export const Barra = () => {
    return (
        <>
            <Container>
                <ContBarra>
                    <Ul>
                        <Li>
                            <A href=''>
                                Home
                            </A>
                        </Li>
                        <Li>
                            <A href='#portifolio'>
                                Portifólio
                            </A>
                        </Li>
                        <Li>
                            <A href='#contato'>
                                Contato
                            </A>
                        </Li>
                    </Ul>
                </ContBarra>
            </Container>
        </>
    )
}