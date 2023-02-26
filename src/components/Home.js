
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
 const navigate=useNavigate()
  return (
    <div className="btn-container">
       <button className="filter-btn" onClick={(()=>navigate('/menu'))}>Grid</button>
       <button className="filter-btn" onClick={(()=>navigate('/list'))}>List</button>
    </div>
  )
};

export default Home;


