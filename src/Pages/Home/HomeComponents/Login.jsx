import "../Home.css";
import "./Login.css";
import React, { useState } from "react";

function LogIn() {
  // React States

  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "denis",
      password: "123"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "nome inválido",
    pass: "senha inválida"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container textCenter">
          <label>Nome de Usuário</label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container textCenter">
          <label>Senha</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        <div className="fonte"></div>
      </form>
    </div>
  );

  return (
    <div className="centerContent">
      <div className="login-form">
        <div className="title textCenter">
          <font color="#234f9c">Login</font>
        </div>
        {isSubmitted ? <div>Usuário logado com sucesso!</div> : renderForm}
      </div>
    </div>
  );
}

export default LogIn;
