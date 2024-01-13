import React from "react";
import"./paginado.css"



function Paginado({ totalPosts, postPerPage, setCurrentPage, currentPage }) {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
      pages.push(i);
  }

  return (
      <div className='paginado'>
          {pages.map((page, index) => {
              return (
                

                  <button
      
                      key={index}
                      onClick={() => setCurrentPage(page)}
                      className="button">
                      {page}
                  </button>
              
              );
          })}
      </div>
  );
};

export default Paginado;