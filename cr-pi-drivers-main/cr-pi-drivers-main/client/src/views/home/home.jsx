import {
    getDrivers,
    getDriversByName,
    cleanDetail,
    ordenarPorName,
    ordenarDob,
    filtradoPorDriver,
  } from "../../redux/actions";
  import "./home.css";
  import Cardlist from "../../componentes/cardlist/cardlist";
  import Navbar from "../../componentes/navbar/navbar";
  import Paginado from "../../componentes/paginado/paginado";
  import Filtros from "../../componentes/filtros/filtros";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  
  function Home() {
    const dispatch = useDispatch();
    const backUp = useSelector((state) => state.backUp);
    const allDrivers = useSelector((state) => state.allDrivers);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage] = useState(8);
  
    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPosts = allDrivers.slice(firstPostIndex, lastPostIndex);
  
    useEffect(() => {
      if (!allDrivers.length) {
        dispatch(getDrivers());
      }
    }, [dispatch, allDrivers]);
    useEffect(() => {
      return () => dispatch(cleanDetail());
    }, []);
  
    const handleChange = (event) => {
      setSearch(event.target.value.toLowerCase());
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      
        dispatch(getDriversByName(search));
      
    };
  
    const handleSortName = (e) => {
      e.preventDefault();
      dispatch(ordenarPorName(e.target.value));
      setCurrentPage(1);
    };
    const handleSortDob = (e) => {
      e.preventDefault();
      dispatch(ordenarDob(e.target.value));
      setCurrentPage(1);
    };
    const handleFilter = (e) => {
      e.preventDefault();
      dispatch(filtradoPorDriver(e.target.value));
      setCurrentPage(1);
    };

    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    }
  
    return (
      <div className="body">
        <div>
          <Navbar handleSubmit={handleSubmit} handleChange={handleChange} />
        </div>
        <div>
          <Filtros
            allDrivers={backUp}
            handleFilter={handleFilter}
            handleSortName={handleSortName}
            handleSortDob={handleSortDob}
          />
        </div>
        <div>
          <Paginado
            totalPosts={allDrivers.length}
            postPerPage={postPerPage}
            setCurrentPage={handlePageChange}
            currentPage={currentPage}
          />
        </div>
        <div>
    <section>
      {currentPosts.length === 0 ? (
        <p>No se encontraron conductores.</p>
      ) : (
        <Cardlist allDrivers={currentPosts} />
      )}
    </section>
  </div>
      </div>
    );
  }
  
  export default Home;