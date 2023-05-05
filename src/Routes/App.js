import "../styles.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Navbar/Navbar.js";
import Footer from "./Footer/Footer.js";
import background from "./background.jpg";

import Sobre from "../Pages/Sobre/Sobre";
import Home from "../Pages/Home/Home";
import Planos from "../Pages/Planos/Planos";
import Aulas from "../Pages/Aulas/Aulas";
import AulasMenu from "../Pages/Aulas/AulasMenu/AulasMenu";
import Aula1 from "../Pages/Aulas/AulasMenu/Aula1";
import CntAdc from "../Pages/Aulas/ConteudoMenu/ConteudoAdc";
import Conta from "../Pages/Conta/Conta";

import Admin from "../Pages/Admin/Pages/AdminMenu";

import VerUsuarios from "../Pages/Admin/Pages/VerUsuarios";
import Conteudo from "../Pages/Admin/Pages/CadastrarConteudo";
import ExcluirConteudo from "../Pages/Admin/Pages/ExcluirConteudo";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/aulas" element={<Aulas />} />
          <Route path="/aula1" element={<Aula1 />} />
          <Route path="/aulasmenu" element={<AulasMenu />} />
          <Route path="/conta" element={<Conta />} />
          <Route path="/admin" element={<Admin />} />

          <Route path="/conteudoadicional" element={<CntAdc />} />
          <Route path="/verusuarios" element={<VerUsuarios />} />
          <Route path="/cadastrarconteudo" element={<Conteudo />} />
          <Route path="/excluirconteudo" element={<ExcluirConteudo />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
