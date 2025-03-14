import { ContainerInit, Video, TextVideo, TextVideo2 } from "./prepage_styled";
import video from "../assets/video2.mp4";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PrePage = () => {
  const [texto, setTexto] = useState<string>("");
  useEffect(() => {
    setTimeout(() => {
      setTexto("");//Deixei em branco
    }, 1000);
  }, []);

  /// Variants para animação de letras individuais
  const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5 }, // Delay entre letras
    }),
  };

  return (
    <ContainerInit>
      <TextVideo>
        {texto.split("").map((letra, index) => (
          <motion.span key={index} variants={letterVariants} initial="hidden" animate="visible" custom={index}>
            {letra}
          </motion.span>
        ))}
        
        <TextVideo2>
          <Link style={{ textDecoration: "none" }} to="/home">Access</Link>
        </TextVideo2>
      </TextVideo>
      <Video autoPlay muted loop>
        <source src={video} type="video/mp4" />
      </Video>
    </ContainerInit>
  );
};

export default PrePage;
