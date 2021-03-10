import React, {useState} from "react";
import {SortType} from '../../const';
import PropTypes from "prop-types";


const Sort = ({onSortBook}) => {
  const [activeMenu, setActiveMenu] = useState();

  return (
    <ul className="sort">
      <li><a href="/#" id="by_name" className={`sort__button ${activeMenu === 'by_name' ? 'sort__button--active' : ``}`} data-sort-type="by_name"
            onClick={(evt) => {
              evt.preventDefault();
              onSortBook("by_name");
              setActiveMenu('by_name');

            }}>
            {SortType.BY_NAME}
          </a></li>
      <li><a href="/#" id="by_date" className={`sort__button ${activeMenu === 'by_date' ? 'sort__button--active' : ``}`} data-sort-type="by_date"
            onClick={(evt) => {
              evt.preventDefault();
              onSortBook("by_date");
              setActiveMenu('by_date');
            }}>
              {SortType.BY_DATE}
          </a></li>
    </ul>
  )

}

Sort.propTypes = {
  onSortBook: PropTypes.func.isRequired,
};


export default Sort;
