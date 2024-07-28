
import React from 'react';

function Pagination({ totalNotes, notesPerPage, currentPage, setCurrentPage, totalPages, pagesLimit }) {
  // Generate an array of page numbers to display
  const pages = [];
  for (let i = 1; i <= Math.min(totalPages, pagesLimit); i++) {
    pages.push(i);
  }

  // Function to handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="pagination">
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {pages.map(page => (
        <button 
          key={page} 
          onClick={() => handlePageChange(page)} 
          className={currentPage === page ? 'active' : ''}
        >
          {page}
        </button>
      ))}
      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
