import axios from "axios";

export const GET_DRIVERS = "GET_DRIVERS";
export const POST_DRIVERS = "POST_DRIVERS";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAN_DETAIL = "CLEAN_DETAIL";
export const GET_DRIVERS_BY_NAME = "GET_DRIVERS_BY_NAME";
export const ORDER_NAME = "ORDER_NAME";
export const ORDER_DOB = "ORDER_DOB";
export const FILTRO_POR_DRIVER = "FILTRO_POR_DRIVER";
export const GET_TEAMS = "GET_TEAMS";
export const ADD_DRIVER = "ADD_DRIVER"

export const getDrivers = () => {
  return async function (dispatch) {
    try {
      const response = await axios("http://localhost:3001/drivers");
      return dispatch({
        type: GET_DRIVERS,
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    try {
      let driverId = await axios(`http://localhost:3001/drivers/${id}`);

      return dispatch({
        type: GET_DETAIL,
        payload: driverId.data,
      });
    } catch (error) {
      throw new Error(error);
    }
  };
};

export const postDrivers = (info) => {
  return async function (dispatch) {
    try {
      // Verificación
      if (
        info.forename === "" ||
        info.surname === "" ||
        info.nationality === "" ||
        info.image === "" ||
        info.dob === "" ||
        info.description === "" ||
        info.teams.length === 0
      ) {
        throw new Error("Faltan datos");
      };

      
      const response = await axios.post("http://localhost:3001/drivers", info);

      dispatch(addDriver(response.data))

      alert("Corredor creado");
    } catch (error) {
      alert(error.message);
    }
  };
};

export const addDriver = (driver) => {
  return {
    type: ADD_DRIVER,
    payload: driver
  };
};

export const getDriversByName = (forename) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/drivers/?forename=${forename}`
      );
      return dispatch({
        type: GET_DRIVERS_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const cleanDetail = () => {
  return {
    type: "CLEAN_DETAIL",
    payload: [],
  };
};
export function ordenarPorName(payload) {
  return {
    type: "ORDER_NAME",
    payload,
  };
}
export function ordenarDob(dob) {
  return {
    type: "ORDER_DOB",
    payload: dob,
  };
}
export const filtradoPorDriver = (teams) => {
  return {
    type: "FILTRO_POR_DRIVER",
    payload: teams,
  };
};

export const getTeams = () => {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/teams");
    dispatch({ type: GET_TEAMS, payload: response.data });
  };
};