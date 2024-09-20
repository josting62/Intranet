//* Importaciones de los componentes de la pagina
import Layout from "./components/layout";
import Header from "./components/pages/header";
import Sidebar from "./components/pages/sidebar";
import Footer from "./components/footer";
import Inicio from "./components/pages/inicio";
import TablaRadicacion from "./components/pages/TablaRadicacion"; // Ejemplo de otra página
import Usuarios from "./components/pages/usuarios";
import Perfil from "./components/pages/perfil"; // Ejemplo de otra página
import RegistrarUsuarios from "./components/pages/RegistrarUsuarios";
//* Importación de react-router-dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Router>
        <Header />
        <div className="relative flex">
          {/* Configuración de rutas */}
          <Sidebar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/Perfil" element={<Perfil />} />
              <Route path="/usuarios" element={<Usuarios />} />
              <Route path="/Tabla-Radicacion" element={<TablaRadicacion />} />
              <Route
                path="/Registrar-usuarios"
                element={<RegistrarUsuarios />}
              />
              {/* Agrega más rutas según sea necesario */}
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </Layout>
  );
}

export default App;
