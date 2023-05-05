import PersonAdd from "./ContaComponents/PersonAdd";
import LoginForm from "./ContaComponents/LoginForm";

export default function Conta() {
  return (
    <>
      <div className="conta centerContent textFont">
        <h2>Conta</h2>
        <p className="fonte">
          A conta é nescessária para salvar o seu progresso, caso deseje
          assistir as aulas sem uma conta ainda é possível, entretanto não é o
          recomendado.
        </p>
        <div className="login-form mg-top">
          <div className="form textCenter">
            <div className="title ">Login</div>
            <LoginForm />
          </div>
        </div>
        <div className="mg-top">
          <h2>Criação da conta</h2>
          <p className="mg-top">
            Para a realização do cadastro só é preciso preencher os dados
            abaixo:
          </p>
        </div>
        <div>
          <div className="login-form mg-top">
            <div className="form textCenter">
              <div className="title ">Cadastro</div>
              <PersonAdd />
            </div>
          </div>
        </div>{" "}
        ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
      </div>
    </>
  );
}
