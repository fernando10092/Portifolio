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
                            <A href='#about'>
                                About me
                            </A>
                        </Li>
                        <Li>
                            <A href='#projects'>
                                Projects
                            </A>
                        </Li>
                        <Li>
                            <A href='#contact'>
                                Contact
                            </A>
                        </Li>
                    </Ul>
                </ContBarra>
            </Container>
        </>
    )
}