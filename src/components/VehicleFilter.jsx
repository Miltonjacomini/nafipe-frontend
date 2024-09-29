import React, { useState } from 'react';

function VehicleFilter({ onFilter }) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  const handleFilter = () => {
    onFilter({ brand, model, year, priceRange });
  };

  return (
    <div>
      <div className="search-container">
        <input type="text" placeholder="Pesquisar..." onChange={handleFilter}/>
      </div>
    </div>
  );
}

export default VehicleFilter;