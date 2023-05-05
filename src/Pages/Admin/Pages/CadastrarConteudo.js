import ConteudoAdd from "../AdminComponents/CouteudoAdd";
import ConteudoListAdmin from "../AdminComponents/ConteudoListAdmin";

export default function CadastrarConteudo() {
  return (
    <>
      <div className="textCenter centerContent textJustify">
        <div class="wrapper">
          <a href="/admin" className="hoverUsers">
            <span>Voltar</span>
          </a>
        </div>

        <h2>Para colocar algum conteúdo a mais preencha os dados abaixo </h2>
        <ConteudoAdd />
        <ConteudoListAdmin />
      </div>
    </>
  );
}
