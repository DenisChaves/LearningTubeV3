import "./Home.css";
import Banner from "./HomeComponents/Banner";
import LogIn from "./HomeComponents/Login";
import Fade from "react-reveal/Fade";
import LoginFormHome from "./HomeComponents/LoginFormHome"

function Home() {
  return (
    <>
      <div>
        <Banner />
      </div>

      <div className="centerContent">
        <div className="textJustify textFont">
          <Fade bottom>
            <h2>Seja Bem-vindo(a)!</h2>
            <p className="mg-top textFont">
              O LearningTube é um curso de inglês online, este site foi feito
              para as pessoas que desejam aprender inglês de um jeito mais
              agradável. Para saber mais clique em{" "}
              <a href="./sobre">
                <font color="#234f9c">Sobre.</font>
              </a>
            </p>
            <div className="textFont mg-top">
              <h4>Aqui você tem a melhor experiência de ensino</h4>
              <p className="mg-top">
                <ul>
                  <li>
                    Aulas que se encaixam na sua rotina: aprenda inglês onde
                    quando quiser, por computador ou celular, 24 horas por dia.
                  </li>
                  <br></br>
                  <li>
                    Lições no nível certo para você: comece do zero ou continue
                    de onde parou, do iniciante ao avançado.
                  </li>
                </ul>
              </p>
            </div>

            <div className="image-container">
              <img
                src="img/Welcome.png"
                className="image"
                alt="Let's Study English"
              />
            </div>
          </Fade>
          <div className="mg-top">
            <Fade bottom>
              <h2>Salve seu progresso!</h2>
              <p>
                <font color="#234f9c"></font>
              </p>

              
              <p className="mg-top">
                Não se preocupe em perder seu progresso, portanto que você tenha
                uma{" "}
                <a href="./conta">
                  <font color="#234f9c">Conta</font>
                </a>{" "}
                seu progresso será salvo automaticamente.
              </p>
              <p className="mg-top">
                Aprender inglês não precisa ser uma tarefa chata. Temos milhares
                de exercícios interativos em áudio e vídeo para você avançar de
                forma rápida e intuitiva
              </p>
            </Fade>
          </div>
          
          </div>
          <div className="login-form mg-top">
                <div className="form textCenter">
                  <div className="title ">Login</div>
                    <LoginFormHome />
                </div>
              </div>
              <div>
        </div>
      </div>

      <Fade left>
        <div className="cardCheck mg-top">
          <div className="image-container">
            <img
              src="img/home/Check.png"
              className="image img-132 mg-top"
              alt="Check"
            />
          </div>
          <p className="mg-top textCenter cardText">
            Aprenda de verdade com um conteúdo em inglês ensinado por
            especialistas em educação online.
          </p>
        </div>

        <div className="cardMoney ">
          <div className="image-container">
            <img
              src="img/home/Money.png"
              className="image img-132 mg-top"
              alt="Check"
            />
          </div>
          <p className="mg-top textCenter cardText">
            Assista às nossas aulas pelo computador ou pelo aplicativo
            totalmente de graça!
          </p>
        </div>
        <div className="cardMusic ">
          <div className="image-container">
            <img
              src="img/home/Music.png"
              className="image img-132 mg-top"
              alt="Check"
            />
          </div>
          <p className="mg-top textCenter cardText">
            Aprenda inglês de uma forma interativa ouvindo músicas e vendo
            séries!
          </p>
        </div>
        <div className="cardThumbs ">
          <div className="image-container">
            <img
              src="img/home/Thumbs.png"
              className="image img-132 mg-top"
              alt="Thumbs"
            />
          </div>
          <p className="mg-top textCenter cardText">
            Deixe seu feedback! Estamos sempre tentando melhorar.
          </p>
        </div>
      </Fade>
    </>
  );
}

export default Home;
