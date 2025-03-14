import { Background_styled, BackgroundColuns, Coluna1, H1, ColAbout, P, Icone } from "./portifolio_styled";
import python from '../assets/python.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import typesc from '../assets/ts.png';
import react from '../assets/react.png';
import node from '../assets/node.png';
import arduino from '../assets/arduino.png';
import flutter from '../assets/flutter.png';
import ai from '../assets/ai.png';

export const Portifolio = () => {
    return (
        <>
            <Background_styled>
                <BackgroundColuns>
                    <div>
                        <Coluna1>
                            <Icone src={html} />
                            <Icone src={css} />
                            <Icone src={node} />
                            <Icone src={python} />
                            <Icone src={react} />
                            <Icone src={typesc} />
                            <Icone src={arduino} />
                            <Icone src={flutter} />
                            <Icone src={ai} />

                        </Coluna1>
                    </div>
                    <ColAbout>
                        <H1>About Me</H1>
                        <P>I am currently pursuing a Postgraduate degree in Machine Learning Engineering at FIAP and have completed a Full Stack Python Development course at EBAC - British School of Creative Arts and Technology. I hold degrees in Systems Analysis and Development, Accounting Sciences, an MBA in Advanced Financial Management, and Business Administration.

                            As a versatile and proactive professional, I have solid knowledge of HTML, CSS, JavaScript, TypeScript, Node.js, React, Python, and MySQL. Additionally, I stay up to date with the latest trends in web development by taking complementary courses.

                            I demonstrate analytical skills and proactivity, as evidenced by my experience as an Administrative and Financial Analyst, where I was responsible for implementing financial systems, automating tasks with Python, and negotiating with suppliers to reduce costs, leading to significant improvements in operational efficiency. I actively participated in the development of a custom website for my own wedding, as well as other small projects, applying advanced web development concepts.

                            I have experience in back-end development, including database structuring and optimization, API creation, authentication and security implementation, as well as server management and system integration. My soft skills include problem-solving, teamwork, and adaptability-essential qualities for thriving in dynamic and multifunctional environments.

                            I am ready to take on challenges and contribute innovative solutions to development projects, combining my financial analysis expertise with my passion for software development.
                            <br/>

                            Check out more about my journey on my LinkedIn and feel free to reach out:
                            📩 fernando100@windowslive.com | 📞 +55 11 99537-0943</P>
                    </ColAbout>
                </BackgroundColuns>
            </Background_styled>
        </>
    )
}