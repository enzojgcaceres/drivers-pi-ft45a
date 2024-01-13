import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail , cleanDetail} from "./../../redux/actions/index";
import "./detail.css";
function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.detail);
  console.log( "Estoy aqui en el detail" ); //! ATENCION

  useEffect(() => {
  
      dispatch(getDetail(id));
    
  }, [dispatch]);

  useEffect(()=> {
    return ()=> dispatch(cleanDetail())
},[])

  return (
    <div>

      <div>
          <Link  className="gohome" to="/home">Home</Link>
        </div>
    <div className="detail">
      {detail.hasOwnProperty("name") && (
        <div>
          <h2>
            {detail.name.forename} {detail.name.surname}
          </h2>
          <img className="img" src={detail.image.url} alt="Driver" />
          <ul>
            <li>{detail.nationality}</li>
            <li>{detail.dob}</li>
            <li>{detail.teams}</li>
          </ul>

          <p>{detail.description}</p>
        </div>
      )}
    </div>
    </div>
  );
}

export default Detail;