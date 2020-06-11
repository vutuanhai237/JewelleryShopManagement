import React from 'react';
import PropTypes from 'prop-types';



const Pagination = (props) => {
    const { max, current, onChange } = props;
    let pageItems = [];
    for (let i = 1; i <= max; i++) {
        pageItems.push(
            <li key={i} className={"page-item" + (current === i ? " active" : "")}>
                <button className="page-link" onClick={() => onChange(i)}>{i}</button>
            </li>
        );
    }
    return (
        <nav aria-label="Page navigation example" className="mr-md-4">
            <ul className="pagination justify-content-end">
                <li className={"page-item" + (current === 1 ? " disabled" : "")}>
                    <button disabled={current === 1} className="page-link" onClick={() => onChange(current - 1)}>Previous</button>
                </li>
                {pageItems}
                <li className={"page-item" + (current === max ? " disabled" : "")}>
                    <button disabled={current === max} className="page-link" onClick={() => onChange(current + 1)}>Next</button>
                </li>
            </ul>
        </nav>
    );
}
Pagination.propTypes = {
    max: PropTypes.number,
    current: PropTypes.number,
    onChange: PropTypes.func,
};

Pagination.defaultProps = {
    max: 1,
    current: 1,
    onChange: () => { }
};

export default Pagination;