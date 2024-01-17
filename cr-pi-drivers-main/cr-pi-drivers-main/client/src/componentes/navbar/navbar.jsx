import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar({ handleSubmit, handleChange }) {
  return (
    <div className="nav-container">
      <form className="buscador">
        <input
          className="buscador-click"
          onChange={handleChange}
          placeholder="Busqueda por nombre!"
        />
        <button className="buscador-click" onClick={handleSubmit}>
          Buscar
        </button>
      </form>

        <Link className="link-boton" to="/create">
          <p>Crear Piloto</p>
        </Link>
    </div>
  );
}

export default Navbar;