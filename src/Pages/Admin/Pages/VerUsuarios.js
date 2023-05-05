import PersonList from "../AdminComponents/PersonList";

import "./VerUsuarios.css";

export default function VerUsuarios() {
  return (
    <>
      <div className="textCenter centerContent textJustify">
        <div class="wrapper">
          <a href="/admin" className="hoverUsers">
            <span>Voltar</span>
          </a>
        </div>

        <h2>Usuários que estão no Sistema</h2>
        <PersonList />
      </div>
    </>
  );
}
