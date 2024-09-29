import vehiclesDB from './combined.json';
import { v4 as uuidv4 } from 'uuid';

function vehiclesFlat() {
  return vehiclesDB.map((vehicle) => {
    // Extract and return model data for each model
    return vehicle.models.map((model) => ({
      id: uuidv4(),
      brand: vehicle.name,
      codigo_fipe: model.codigo_fipe,
      fuel: model.fuel,
      fuel_id: model.fuel_id,
      month_reference: model.month_reference,
      model: model.name,
      price: model.price,
      vehicle_type: model.vehicle_type,
      year: model.year,
    }));
  }).flat(); // Flatten the nested array of model objects
}

function filterVehiclesFlat(filters) {
  const { brand, model, year } = filters;

  return vehiclesFlat().filter((vehicle) => {
    return vehicle.brand?.toLowerCase().includes(brand?.toLowerCase())
      && vehicle.model?.toLowerCase().includes(model?.toLowerCase())
      && vehicle.year?.toLowerCase().includes(year?.toLowerCase());
  });
}

export {
  filterVehiclesFlat,
};