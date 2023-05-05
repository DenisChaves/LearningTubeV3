import React from "react";
import "./Conteudo.css";

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
      <div className="cntAll textJustify">
        <h1 className="main-title">Conteúdo Adicional</h1>
        {this.state.conteudo.map((listar) => (
          <div key={listar.id} className="ctn-container">
            <h1 className="cnttitle">{listar.title}</h1>
            <p className="cntcontent">{listar.content}</p>
          </div>
        ))}
      </div>
    );
  }
}
