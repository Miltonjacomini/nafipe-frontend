import React from 'react';

function VehicleList({ vehicles }) {
  return (
    <div>
      {vehicles.map((vehicle) => (
        <div key={vehicle.id}>
          <h2>{vehicle.name}</h2>
          <ul>
            {vehicle.models.map((model) => (
              <li key={model.codigo_fipe}>
                <strong>Modelo:</strong> {model.name}
                <br />
                <strong>Ano:</strong> {model.year}
                <br />
                <strong>Preço:</strong> {model.price}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default VehicleList;