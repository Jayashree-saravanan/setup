import React from 'react';

const Buttons = ({filterItems}) => {
 
  return (
    <div className="btn-container">
       <button className="filter-btn" onClick={()=>filterItems('grid')}>Grid</button>
       <button className="filter-btn" onClick={()=>filterItems('list')}>List</button>
    </div>
  )
};

export default Buttons;


