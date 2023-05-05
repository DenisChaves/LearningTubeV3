import Fade from "react-reveal/Fade";

export default function AulasMenu() {
  return (
    <>
      <div className=" textJustify textCenter centerContent ">
        <h2 className="cardAdminTitle">Menu das Aulas</h2>
        <div className="blackfont textFont">
          <p>
            Seja bem-vindo(a) a página das Aulas, aqui você pode estudar quando
            e onde quiser!
          </p>

          <p className="mg-top">
            A seção das aulas é dividida em diferentes níveis.
          </p>
        </div>

        <h3 className="mg-top">Iniciante</h3>
        <div>
          <a href="/aula1">
            <button class="glow-on-hover" type="button">
              {" "}
              <h2 className="cardAdminText">Verbo To Be</h2>
              <small>Primeira Aula</small>
            </button>
          </a>

          <br />
          <br />
          <a href="">
            <button class="glow-on-hover" type="button">
              {" "}
              <h2 className="cardAdminText">Números</h2>
              <small>Segunda Aula</small>
            </button>
          </a>

          <br />
          <br />
          <a href="">
            <button class="glow-on-hover" type="button">
              {" "}
              <h2 className="cardAdminText">Como Cumprimentar</h2>
              <small>Terceira Aula</small>
            </button>
          </a>
        </div>
        <div className="centerContent image-container img-600 ">
          <img src="img/aulas/AulaMenu.png" className="image" alt="Admin" />
        </div>
        <br />
      </div>
    </>
  );
}
