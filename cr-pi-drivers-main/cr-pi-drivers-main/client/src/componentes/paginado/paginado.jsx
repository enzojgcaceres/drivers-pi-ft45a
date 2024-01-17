import React from "react";
import"./paginado.css"

function Paginado({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
    const totalPages = Math.ceil(totalPosts / postPerPage);
    const buttonsToShow = 3;
    const halfButtons = Math.floor(buttonsToShow / 2);
  
    const startPage = Math.max(1, currentPage - halfButtons);
    const endPage = Math.min(totalPages, startPage + buttonsToShow - 1);
  
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
    };
  
    return (
      <div className="paginado">
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)} className="button">
            {"<="}
          </button>
        )}
  
        {Array.from({ length: buttonsToShow }, (_, index) => startPage + index).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={page === currentPage ? "button active" : "button"}
          >
            {page}
          </button>
        ))}
  
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)} className="button">
            {"=>"}
          </button>
        )}
      </div>
    );
  }
  
  export default Paginado;
