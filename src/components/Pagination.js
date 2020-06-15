import React from 'react';
import PropTypes from 'prop-types';



const Pagination = (props) => {
    const { max, current, onChange } = props;
    let pageItems = [];
    var accept = 3;
    let pmin = 1;
    let pmax = 1;

    if (current < accept) {
        pmin = (current - Math.ceil(accept / 2)) > 1 ? (current - Math.ceil(accept / 2)) : 1;
        accept = accept - (current - pmin);
        pmax = (current + accept) > max ? max : (current + accept);
    }
    else {
        pmax = (current + Math.ceil(accept / 2)) > max ? max : (current + Math.ceil(accept / 2));
        accept = accept - (pmax - current);
        pmin = (current - accept) > 1 ? (current - accept) : 1;
    }

    for (let i = pmin; i <= pmax; i++) {
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
                {
                    pmin !== 1 &&
                    <li className="page-item disabled">
                        <button disabled className="page-link">...</button>
                    </li>
                }
                {pageItems}
                {
                    pmax !== max &&
                    <li className="page-item disabled">
                        <button disabled className="page-link">...</button>
                    </li>
                }
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