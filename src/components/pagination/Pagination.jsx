import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({info,pageNumber,setPageNumber}) => {
console.log(info.pages);
  return (
    <ReactPaginate/>
  );
};

export default Pagination;
