import React from "react";
import "./index.css";

const Pagination = ({ onClick }) => {
  return (
    <div className="paginationContainer">
      <button className="BtnPagination" onClick={onClick}>
        Ver mais
      </button>
    </div>
  );
};
export default Pagination;
