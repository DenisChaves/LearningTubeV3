import "../Admin.css";

import React from "react";

export default class PersonList extends React.Component {
  state = { persons: [] };

  componentDidMount() {
    fetch("https://Crud.xeirovisk.repl.co/users")
      .then((response) => response.json())
      .then((personsList) => {
        this.setState({ persons: personsList });
      });
  }
  ///<th>Progresso</th>
  ///<td className="compcss">{person.progresso}</td>

  render() {
    return (
      <div className="cntAdminAll textCenter">
        <h1 className="cntidtitle">Usuários Cadastrados</h1>
        <br />
        {this.state.persons.map((person) => (
          <div key={person.id} className="ctn-container">
            <p className="cntcontent">
              <font color="#0F6492">ID:</font> {person.id}
              <br />
              <font color="#0F6492">Usuário:</font> {person.name}
              <br />
              <font color="#0F6492">Email: </font>
              {person.email}
              <br />
            </p>
          </div>
        ))}
      </div>
    );
  }
}
