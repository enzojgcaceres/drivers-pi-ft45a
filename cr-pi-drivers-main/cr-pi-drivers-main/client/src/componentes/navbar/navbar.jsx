import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar({ handleSubmit, handleChange }) {
  return (
    <div className="nav-container">
      <form className="buscador">
        <input
          className="buscador-click"
          onChange={handleChange}
          placeholder="Busqueda"
        />
        <button className="buscador-click" onClick={handleSubmit}>
          Buscar
        </button>
      </form>
   
   
        <Link className="buscador-click" to="/create">
          <p>Crear/create</p>
        </Link>
     
    </div>
  );
}

export default Navbar;