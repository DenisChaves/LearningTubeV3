import React from "react";
import axios from "axios";

export default class PersonAdd extends React.Component {
  state = {
    name: "",
    email: "",
    senha: "",
    progresso: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
      email: this.state.email,
      senha: this.state.senha,
      progresso: this.state.progresso
    };
    console.log(user);
    axios.post(`https://Crud.xeirovisk.repl.co/users`, user).then((res) => {
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p className="mg-top">Usuário</p>
            <input
              className="space"
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
            <br />
            <p className="mg-top">Email</p>
            <input
              className="space"
              type="email"
              name="email"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br></br>
            <p className="mg-top">Senha</p>
            <input
              className="space"
              type="password"
              name="senha"
              onChange={this.handleChange}
              value={this.state.senha}
            />
            <br></br>
          </label>
          <br />
          <button className="buttonPlanos" type="submit" onClick={refreshPage}>
            Realizar cadastro
          </button>
        </form>
      </div>
    );
  }
}
