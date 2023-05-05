import ConteudoRemove from "../AdminComponents/ConteudoRemove";
import ConteudoListAdmin from "../AdminComponents/ConteudoListAdmin";

export default function ExcluirConteudo() {
  return (
    <>
      <div className="textCenter centerContent textJustify">
        <div class="wrapper">
          <a href="/admin" className="hoverUsers">
            <span>Voltar</span>
          </a>
        </div>

        <h2>Para excluir algum conteúdo coloque o ID do mesmo. </h2>
        <ConteudoRemove />
        <ConteudoListAdmin />
      </div>
    </>
  );
}
