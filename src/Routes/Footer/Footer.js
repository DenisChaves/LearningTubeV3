import "./Footer.css";

export default function Navbar() {
  return (
    <>
      <div className="footer ">
        <div className="Esq image-footer">
          <img
            src="img/LogoEsticadaBA.png"
            className="image-f"
            alt="Logo"
          ></img>
        </div>
        <div className="Dir">
          Política de Privacidade | Termos de Serviço | Mapa do Site | Copyright
          © 2022 LearningTube. Todos os direitos reservados. O nome e logotipo
          Learning Tube é uma marca registrada.
        </div>
      </div>
    </>
  );
}
