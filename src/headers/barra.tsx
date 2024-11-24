import logo from '../assets/logo.png';
import { Container, Logo, ContBarra, Ul, Li, A } from "./barra_styled";
export const Barra = () => {
    return (
        <>
            <Container>
                <Logo src={logo} />
                <ContBarra>
                    <Ul>
                        <Li>
                            <A href='/'>
                                Home
                            </A>
                        </Li>
                        <Li>
                            <A href='/portifolio'>
                                Portifólio
                            </A>
                        </Li>
                        <Li>
                            <A href='/contato'>
                                Contato
                            </A>
                        </Li>
                    </Ul>
                </ContBarra>
            </Container>
        </>
    )
}