import React from "react";
import axios from "axios";
import "./Cnt.css";

export default class ConteudoAdd extends React.Component {
  state = {
    title: "",
    content: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const cntAdc = {
      title: this.state.title,
      content: this.state.content
    };
    console.log(cntAdc);
    axios.post(`https://Crud.xeirovisk.repl.co/cntAdc`, cntAdc).then((res) => {
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
      <div className="cntAll">
        <form onSubmit={this.handleSubmit}>
          <h1 className="cnttitle">Título</h1>
          <textarea
            className="space"
            rows="4"
            cols="38"
            type="text"
            name="title"
            onChange={this.handleChange}
            value={this.state.title}
          />
          <br></br>
          <h1 className="cnttitle">Conteúdo</h1>
          <textarea
            className="space"
            rows="10"
            cols="38"
            type="text"
            name="content"
            onChange={this.handleChange}
            value={this.state.content}
          />
          <br></br>

          <button
            className="buttonAdicionar"
            type="submit"
            onClick={refreshPage}
          >
            Adicionar
          </button>
        </form>
      </div>
    );
  }
}
