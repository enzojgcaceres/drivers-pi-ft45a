import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDrivers, getTeams, postDrivers } from "../../redux/actions";
import { Link } from "react-router-dom";
import "./create.css";

function Create() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTeams());

    return () => {
      dispatch(getDrivers());
    };
  }, [dispatch]);

  const teamsTraer = useSelector((state) => state.teams);
  
  const [state, setState] = useState({
    forename: "",
    surname: "",
    nationality: "",
    image: "",
    dob: "",
    description: "",
    teams: [],
  });
 
  const [errors, setErrors] = useState({
    forename: "Nombre requerido",
    surname: "Apellido requerido",
    nationality: "Nacionalidad requerida",
    image: "Imagen requerida",
    dob: "Fecha requerida (formato aaaa/mm/dd)",
    description: "Descripcion",
    teams: "Equipos",
  });

  

  const handleChange = (event) => {
    const { name, value } = event.target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]:
        value !== ""
          ? ""
          : `${name[0].toUpperCase() + name.slice(1)} requerido`,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await dispatch(postDrivers(state));

      if(response && response.payload) {
        dispatch(getDrivers());
      
      console.log("driver creado", response.driver)

        setState({
          forename: "",
          surname: "",
          nationality: "",
          image: "",
          dob: "",
          description: "",
          teams: [],
        });
      }
      
      alert("conductor creado exitosamente")
    } catch (error) {
      console.error("Error al crear el conductor", error)
    }
  }  

  const handleSelect = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const selectedValues = selectedOptions.map((option) =>
      Number(option.value)
    );
    const selectedNames = selectedOptions.map((option) => option.title);
    setState((prevState) => ({
      ...prevState,
      teams: selectedValues,
      teamsName: selectedNames.join(", "),
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      teams: selectedValues.length > 0 ? "" : "Equipos requeridos",
    }));
  };

  return (
    <div className="create-container form div">
      <form 
        className="create-container form"
        onSubmit={handleSubmit}>
        <div className="home">
          <Link to="/home">Home</Link>
        </div>
        <div className="create-container form div" >
          <label className="create-container form label" >Nombre</label>
          <input
            className="create-container form input"
            type="text"
            name="forename"
            value={state.forename}
            onChange={handleChange}
          />
          {errors.forename && <span>{errors.forename}</span>}
        </div>
        <div className="create-container form div" >
          <label className="create-container form label" >Apellido</label>
          <input
            className="create-container form input"
            type="text"
            name="surname"
            value={state.surname}
            onChange={handleChange}
          />
          {errors.surname && <span>{errors.surname}</span>}
        </div>
        <div className="create-container form div" >
          <label className="create-container form label" >Nacionalidad</label>
          <input
            className="create-container form input"
            type="text"
            name="nationality"
            value={state.nationality}
            onChange={handleChange}
          />
          {errors.nationality && <span>{errors.nationality}</span>}
        </div>
        <div className="create-container form div" >
          <label className="create-container form label" >Imagen</label>
          <input
            className="create-container form input"
            type="url"
            name="image"
            value={state.image}
            onChange={handleChange}
          />
          {errors.image && <span>{errors.image}</span>}
        </div>
        <div className="create-container form div" >
          <label className="create-container form label" >Fecha de Nacimiento</label>
          <input
            className="create-container form input"
            type="date"
            name="dob"
            value={state.dob}
            onChange={handleChange}
          />
          {errors.dob && <span>{errors.dob}</span>}
        </div>
        <div className="create-container form div" >
          <label className="create-container form label" >Descripcion</label>
          <input
            className="create-container form input"
            type="text"
            name="description"
            value={state.description}
            onChange={handleChange}
          />
          {errors.description && <span>{errors.description}</span>}
        </div>
        <label className="create-container form label" >Equipos:</label>
        <select
          className="create-container form select"
          name="teams"
          value={state.teams}
          onChange={handleSelect}
          multiple
        >
          {teamsTraer?.map((t) => (
            <option title={t.teams} value={t.id} key={t.id || t.teams}>
              {t.teams}
            </option>
          ))}
        </select>
        <div className="create-container form div">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Create;