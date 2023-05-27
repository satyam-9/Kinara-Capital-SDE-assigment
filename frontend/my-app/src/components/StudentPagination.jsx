import React from "react";

const StudentPagination = ({ page, pageSize, onPageChange }) => {
    const handlePrevClick = () => {
        onPageChange(page - 1);
    };

    const handleNextClick = () => {
        onPageChange(page + 1);
    };

    return (
        <div className="pagination">
            <button disabled={page === 0} onClick={handlePrevClick}>
                Prev
            </button>
            <span>Page: {page}</span>
            <button onClick={handleNextClick}>Next</button>
        </div>
    );
};

export default StudentPagination;
