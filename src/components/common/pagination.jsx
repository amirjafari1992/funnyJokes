import React from "react";
import Lodash from "lodash";

const Pagination = props => {
  const { itemsCount = 0, currentPage, pageSize, onPageChange } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  console.log(pageCount)
  if (pageCount < 2) return null;
  const pages = Lodash.range(1, pageCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center">
        {pages.map(page => (
          <li
            key={page}
            className={page === currentPage ? "page-item active" : "page-item"}
            onClick={() => onPageChange(page)}
          >
            <span className="page-link">{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
