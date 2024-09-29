import React, { useState, useEffect, useRef } from 'react';
import { filterVehiclesFlat } from './db/vehicles';
import './App.css';

function App() {
  const [filteredVehicles, setFilteredVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const lastBrandRef = useRef('');

  useEffect(() => {
    console.log("searchTermLoad");
    setFilteredVehicles(filterVehiclesFlat({ brand: searchTerm, model: searchTerm, year: searchTerm }));
    console.log("filteredVehicles", filteredVehicles);
    setLoading(false);
  }, [searchTerm]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1 className="title">Busca de Veículos</h1>
      <div>
        <div className="search-container">
          <input type="text" placeholder="Pesquisar..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
      </div>

      <div className="model-container">
        {filteredVehicles.map((vehicle) => (
          <div key={vehicle.id}>
            {(lastBrandRef.current !== vehicle.name) ? <h2 className="model-title">{vehicle.name}</h2> : ""}
            <ul>
              <li className="model-item" key={vehicle.id+`-`+vehicle.model}>
                {vehicle.model}
                <br />
                {vehicle.year}
                <br />
                <b>{vehicle.price}</b>
              </li>
            </ul>
            {lastBrandRef.current = vehicle.brand}
          </div>
        ))
        }
      </div>


      <script src="https://kit.fontawesome.com/your-font-awesome-kit.js"></script>
    </div>
  );
}

export default App;