import React from "react";

export default class PersonList extends React.Component {
  state = { conteudo: [] };

  componentDidMount() {
    fetch("https://Crud.xeirovisk.repl.co/cntAdc")
      .then((response) => response.json())
      .then((conteudoList) => {
        this.setState({ conteudo: conteudoList });
      });
  }
  ///<th>Progresso</th>
  ///<td className="compcss">{person.progresso}</td>

  render() {
    return (
      <div className="cntAdminAll ">
        {this.state.conteudo.map((listar) => (
          <div key={listar.id} className="ctn-container">
            <h1 className="cntidtitle">Título</h1>
            <p className="cntadmintitle"> {listar.title}</p>
            <h1 className="cntid">ID: {listar.id}</h1>
          </div>
        ))}
      </div>
    );
  }
}
