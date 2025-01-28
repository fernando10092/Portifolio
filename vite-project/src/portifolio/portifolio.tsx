import { Background_styled, BackgroundColuns, Coluna1, H1, A, ColAbout, P, H5 } from "./portifolio_styled";
import capa from '../assets/Capa.png';
import efood from '../assets/efood.png';
import calc from '../assets/calc.png';
import poster from '../assets/poster.png';


export const Portifolio = () => {
    return (
        <>
            <Background_styled>
                <BackgroundColuns>
                    <div>
                        <H1>Projetos em destaque</H1>
                        <Coluna1>
                            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                                <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                </div>
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-bs-interval="10000">
                                        <img src={poster} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <H5>Plataforma de Posts</H5>
                                            <p><A href="https://poster-twitter.vercel.app/">Acesse o site</A></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="10000">
                                        <img src={capa} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <H5>Site de Casamento</H5>
                                            <p><A href="https://github.com/fernando10092/Casamento">https://github.com/fernando10092/Casamento</A></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item" data-bs-interval="2000">
                                        <img src={efood} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <H5>Site de Compras</H5>
                                            <p><A href="https://github.com/fernando10092/Site_Compras">https://github.com/fernando10092/Site_Compras</A></p>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={calc} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <H5>Calculadora</H5>
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
                    </div>
                    <ColAbout>
                        <H1>Sobre mim</H1>
                        <P>Eu sou Fernando de Lima Gomes, Desenvolvedor Full Stack Python, com sólida formação acadêmica e ampla experiência profissional. Tenho paixão por criar soluções tecnológicas que combinam eficiência e inovação. Minha formação inclui cursos e graduações em áreas de tecnologia e negócios, como Desenvolvimento Full Stack Python pela EBAC, Análise e Desenvolvimento de Sistemas, e MBA em Gestão Financeira Avançada, além de experiências significativas no setor financeiro e em desenvolvimento web.

                            Como profissional, sou versátil e proativo, com um perfil que une competências técnicas avançadas e habilidades analíticas. Possuo expertise em HTML, CSS, JavaScript, Typescript, NodeJS, Python, Django, React, e MySQL, com um compromisso constante de me manter atualizado com as tendências do mercado. Minha experiência abrange desde a automação de tarefas e implementação de sistemas financeiros até o desenvolvimento de plataformas web, incluindo projetos como um site personalizado para meu casamento e aplicações como o Poster e o Efood, disponíveis em meu GitHub.

                            Tenho orgulho de trazer para os meus projetos uma abordagem colaborativa e orientada para resultados, evidenciada pela minha capacidade de resolução de problemas, adaptabilidade e comunicação eficaz. Acredito na integração de tecnologia com visão estratégica para desenvolver produtos que não apenas atendam às necessidades técnicas, mas também agreguem valor real ao usuário.

                            Fora do ambiente profissional, já contribuí como professor voluntário de informática e continuo explorando formas de expandir minhas habilidades e compartilhar conhecimentos. Meu objetivo é enfrentar desafios complexos, colaborar com equipes de alta performance e entregar soluções que realmente façam a diferença.

                            Confira mais sobre minha trajetória no meu LinkedIn e sinta-se à vontade para entrar em contato: fernando100@windowslive.com | +55 11 99537-0943.</P>
                    </ColAbout>
                </BackgroundColuns>
            </Background_styled>
        </>
    )
}