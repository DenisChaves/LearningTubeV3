export default function Admin() {
  return (
    <>
      <div className=" textJustify textCenter centerContent ">
        <h2 className="cardAdminTitle">Gerenciamento do Admin</h2>
        <div className="blackfont textFont">
          <p>
            Seja bem-vindo(a) a página do Admin, aqui você possuirá algumas
            opções de gerenciamento.
          </p>
          <p className="mg-top">
            A primeira opção é para ver os usuários que criaram as suas conta no
            site.
          </p>
        </div>
        <div>
          <a href="./verusuarios">
            <button class="glow-on-hover" type="button">
              {" "}
              <h2 className="cardAdminText">Ver Usuários</h2>
            </button>
          </a>
          <p className="mg-top blackfont">
            A segunda opção é utilizada para cadastrar conteúdos adicionais no
            sistema.
          </p>
          <br />
          <a href="./cadastrarconteudo">
            <button class="glow-on-hover" type="button">
              {" "}
              <h2 className="cardAdminText">Cadastrar Conteúdo Adicional</h2>
            </button>
          </a>
          <p className="mg-top blackfont">
            A terceira opção serve para excluir algum conteúdo adicional no
            sistema.
          </p>
          <br />
          <a href="./excluirconteudo">
            <button class="glow-on-hover" type="button">
              {" "}
              <h2 className="cardAdminText">Excluir Conteúdo Adicional</h2>
            </button>
          </a>
        </div>
        <div className="centerContent image-container img-600 ">
          <img src="img/admin/Admin-bro.png" className="image" alt="Admin" />
        </div>
        <br />
      </div>
    </>
  );
}
