import "./filtros.css";

function Filtros({ handleSortName, handleSortDob, handleFilter, allDrivers }) {
  const uniqueTeams = allDrivers
    .flatMap((driver) => {
      return (driver.teams?.split(",") ?? []).map((team) => team.trim());
    })
    .filter((team, index, teams) => teams.indexOf(team) === index);

  return (
    <div className="filtros">
      <label className="button">
        Order name:
        <select className="select" onChange={handleSortName}>
          <option value="none">None</option>
          <option value="a-z">a-z</option>
          <option value="z-a">z-a</option>
        </select>
      </label>
      <label className="button">
        Order nacimiento:
        <select className="select" onChange={handleSortDob}>
          <option value="none">None</option>
          <option value="asc">asc</option>
          <option value="dec">dec</option>
        </select>
      </label>
      <label className="button">
        Filtro team
        <select className="select" onChange={handleFilter}>
          <option value="allDrivers">All</option>
          {uniqueTeams.map((team, index) => (
            <option key={index} value={team}>
              {team}
            </option> 
          ))}
        </select>
      </label>
    </div>
  );
}

export default Filtros;