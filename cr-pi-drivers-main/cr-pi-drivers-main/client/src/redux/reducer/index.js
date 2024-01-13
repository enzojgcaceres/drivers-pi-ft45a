import {
  GET_DETAIL,
  GET_DRIVERS,
  CLEAN_DETAIL,
  GET_DRIVERS_BY_NAME,
  ORDER_NAME,
  ORDER_DOB,
  FILTRO_POR_DRIVER,
  GET_TEAMS,
} from "../actions";

let initialState = {
  allDrivers: [],
  backUp: [],
  detail: [],
  clean: [],
  teams: [], 
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        allDrivers: action.payload,
        backUp: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case GET_DRIVERS_BY_NAME:
      return {
        ...state,
        allDrivers: action.payload,
      };
    case GET_TEAMS:
      return {
        ...state,
        teams: action.payload,
      };
    case CLEAN_DETAIL:
      return {
        ...state,
        clean: [],
      };
    case ORDER_NAME:
      const sortedDrivers = [...state.allDrivers].sort((a, b) => {
        return action.payload === "a-z"
          ? a.forename.localeCompare(b.forename)
          : b.forename.localeCompare(a.forename);
      });
      return {
        ...state,
        allDrivers: sortedDrivers,
      };
    case ORDER_DOB:
      const sortedDriversDob = [...state.allDrivers].sort((a, b) => {
        return action.payload === "asc"
          ? a.dob.localeCompare(b.dob)
          : b.dob.localeCompare(a.dob);
      });
      return {
        ...state,
        allDrivers: sortedDriversDob,
      };
    case FILTRO_POR_DRIVER:
      if (action.payload === "allDrivers") {
        return {
          ...state,
          allDrivers: state.backUp,
        };
      } else {
        const filtro = Object.values(state.allDrivers).filter((driver) =>
          driver.teams?.includes(action.payload)
        );
        return {
          ...state,
          allDrivers: filtro,
        };
      }
    default:
      return state;
  }
}

export default rootReducer;