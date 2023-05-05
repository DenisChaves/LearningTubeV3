import "./Sobre.css";
import Fade from "react-reveal/Fade";

export default function Sobre() {
  return (
    <>
      <div className="centerContent">
        <div className="textJustify">
          <Fade bottom>
            <h2>Nossa Metodologia</h2>
            <p className="mg-top textFont">
              Nossas aulas são voltadas para aqueles que desejam aprender de uma
              forma que também seja agradável. Não se preocupe! Ensinaremos tudo
              desde o inicio para a preparação de cada docente.
              <br></br>
              <br></br>O material é completamente online preparado por
              professores experientes, contendo músicas, séries e a parte
              teórica. O tempo de estudo é definido por cada aluno.
            </p>
          </Fade>
        </div>

        <div className="image-container">
          <img
            src="img/Sobre1.png"
            className="image"
            alt="Let's Study English"
          />
        </div>
        <div className="textJustify">
          <Fade bottom>
            <h2>Quem Somos</h2>
            <p className="mg-top textFont">
              Somos um pequeno grupo, com o objetivo principal é abrir novos
              horizontes para as pessoas, seja para a preparação para o mercado
              de trabalho, seja para o conhecimento pessoal. Não limitaremos os
              nossos estudantes, todas as aulas são livres e não pretendemos
              mudar isso.
            </p>
            <p className="mg-top textFont">
              “The secret of your success is determined by your daily agenda.” -
              John C. Maxwell
            </p>
          </Fade>
        </div>

        <div className="image-container">
          <img
            src="img/Sobre2.png"
            className="image"
            alt="Teacher on a computer"
          />
        </div>
      </div>
    </>
  );
}
