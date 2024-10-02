import React from 'react';
import { InstantSearch, SearchBox, Hits } from 'react-instantsearch';
import searchClient from './db/algolia';

import './App.css';

function Hit({ hit }) {
  return (
    <section className='vehicle-card'>
      <a href={`https://www.webmotors.com.br/carros/estoque/`+hit.brand} target="_blank" rel="noreferrer">
        <div className="vehicle-card__image">
          {/* <img src={hit.image} alt={hit.name} />       */}
        </div>
        <div className="vehicle-card__title">{hit.brand}</div>
        <div className="vehicle-card__info">
          <div>{hit.year}</div>
          <div>{hit.fuel}</div>
        </div>
        <div>{hit.name}</div>
        <div className="vehicle-card__price">{hit.price}</div>
      </a>
    </section>
  );
}

function App() {
  return (
    <div className="App">
      <h1 className="title">Busca de Veículos</h1>
      <div>
        <InstantSearch searchClient={searchClient} indexName="dev_VEHICLES">
          <SearchBox className='search-container' />
          <Hits className='vehicle-list' hitComponent={Hit} />
        </InstantSearch>
      </div>
      <script src="https://kit.fontawesome.com/your-font-awesome-kit.js"></script>
    </div>
  );
}

export default App;