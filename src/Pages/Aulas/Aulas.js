import "react-js-dropdavn/dist/index.css";

export default function Aulas() {
  return (
    <>
      <div className="centerContent textJustify textFont">
        <h2>Como Funciona?</h2>
        <div className="image-container"></div>
        <p>
          As aulas não possuem um limite de tempo, podendo sair e entrar a
          qualquer momento, cada aula contém a parte teórica e a prática. A
          parte téorica apenas será a explicação do assunto sem desvios, já a
          parte prática possui séries e músicas para praticar o assunto que foi
          estudado. Não definimos tempo de curso ou de aula, para que aluno se
          desenvolva de acordo com o seu tempo.
        </p>
        <img
          src="img/aulas/Aulas.png"
          className="image image-center"
          alt="Thinking Face"
        />
        <p>
          A criação da <a href="./conta">Conta</a> é recomendada para salvar o
          seu progresso. O conteúdo adicional é só uma informção a mais fora as
          aulas.
        </p>
        <div className="button-container">
          <a href="./conteudoadicional">
            <button className="buttonPlanos">Ver Conteúdo Adicional</button>
          </a>
        </div>
        <h2>Aulas</h2>
        <p>
          Aulas que se encaixam na sua rotina: aprenda inglês onde quando
          quiser, por computador ou celular, 24 horas por dia!<br></br>
        </p>
        <div className="button-container">
          <a href="/aulasmenu">
            <button className="buttonPlanos">Ver Aulas</button>
          </a>
        </div>
      </div>
      <br />
    </>
  );
}
