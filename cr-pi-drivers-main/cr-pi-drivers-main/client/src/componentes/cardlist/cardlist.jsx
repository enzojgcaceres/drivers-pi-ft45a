import "./cardlist.css"

import Cards from "../card/card";

function Cardlist({allDrivers }) {
 

  return (
    <div className="card-list">
      {allDrivers.map(driver => (
        <Cards key={driver.id} driver={driver} />
      ))}
    </div>
  );
}

export default Cardlist;