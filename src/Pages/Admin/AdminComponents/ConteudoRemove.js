import React from "react";
import axios from "axios";

export default class ConteudoRemove extends React.Component {
  state = {
    id: ""
  };

  handleChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(`https://Crud.xeirovisk.repl.co/cntAdc/${this.state.id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    function refreshPage() {
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
    return (
      <div className="cntAdminAll">
        <form onSubmit={this.handleSubmit}>
          <label>
            <h1 className="cntidtitle">ID do Conteúdo:</h1>
            <input
              className="space"
              type="number"
              name="id"
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button className="buttonDelete" type="submit" onClick={refreshPage}>
            Excluir
          </button>
        </form>
      </div>
    );
  }
}
