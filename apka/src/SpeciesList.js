import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function formatSpeciesName(key) {
  const name = key.replace(/_/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function SpeciesList() {
  const speciesKeys = Object.keys(data);

  return (
    <div>
      <h1>Lista Gatunków</h1>
      <ul>
        {speciesKeys.map(key => (
          <li key={key}>
            <Link to={`/grzyby/species/${encodeURIComponent(key)}`}>
              {formatSpeciesName(key)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SpeciesList;
