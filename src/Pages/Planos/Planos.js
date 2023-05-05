import Fade from "react-reveal/Fade";
import "./Planos.css";

export default function Planos() {
  return (
    <>
      <div className="centerContent textJustify textFont">
        <Fade bottom>
          <h2>Planos</h2>
          <p className="fonte">
            <font color="#0f6492">Quanto custa fazer o curso?</font>
          </p>
          <p>
            Nosso objetivo é preparar as pessoas para começarem a entender mais
            sobre a língua inglesa, por isso todo o conteúdo está disponível de
            graça para todos usuários!
          </p>
        </Fade>
      </div>

      <div className="textJustify textFont">
        <div className="cardCrow mg-top ">
          <Fade left>
            <div className="image-container">
              <img
                src="img/planos/Coroa.png"
                className="image img-132 mg-top"
                alt="Check"
              />

              <p></p>
            </div>
            <h2 className="crowFont">Totalmente Grátis!</h2>
          </Fade>
        </div>
        <p className="mg-top centerContent">
          Para os planos não vamos impor valores, nossa meta é alcançar e
          preparar o máximo de alunos possíveis. Para começar os estudos só é
          nescessário a criação de uma conta. Não perca tempo e comece agora
          mesmo!
        </p>
        <div className="button-container mg-top">
          <a href="./conta">
            <button className="buttonPlanos">Criar Conta</button>
          </a>
        </div>
        <div className="image-container">
          <img
            src="img/planos/Free.png"
            className="image img-500"
            alt="Let's Study English"
          />
        </div>
      </div>

      <br />
      <br />
    </>
  );
}
