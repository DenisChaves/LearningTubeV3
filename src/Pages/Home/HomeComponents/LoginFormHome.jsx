import { AuthContext } from "../../Conta/ContaComponents/Authenticate";

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";


const defaultLogin = {
  login: "",
  password: ""
};

export default function LoginForm() {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 3000);
  }
  const [data, setData] = useState(defaultLogin);
  const { login, password } = data;
  const { signIn, signed } = useContext(AuthContext);
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn(data);
    //if (signed)  alert("Logado com sucesso");
    //navigate("/aulas");
  };

  return (
    <form className="login-form-container" onSubmit={handleSubmit}>
      <p className="mg-top">Usuário</p>
      <input
        label="Login:"
        type="text"
        name="login"
        value={login}
        onChange={onChangeHandler}
      />
      <p className="mg-top">Senha</p>
      <input
        label="Senha:"
        type="password"
        name="password"
        value={password}
        onChange={onChangeHandler}
      />
      <br />
      <br />
      <button type="submit" className="buttonPlanos " onClick={refreshPage}>
        Entrar
      </button>
    </form>
  );
}
