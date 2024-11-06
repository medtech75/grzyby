import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';

function formatSpeciesName(key) {
  const name = key.replace(/_/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function SpeciesDetail() {
  const { name } = useParams();
  const decodedName = decodeURIComponent(name);
  const images = data[decodedName] || [];
  const displayName = formatSpeciesName(decodedName);

  return (
    <div>
      <h1>{displayName}</h1>
      {images.length > 0 ? (
        images.map(image => (
          <img
            key={image}
            src={`/grzyby/images/${decodedName}/${image}`}
            alt={displayName}
            style={{ width: '300px', margin: '10px' }}
          />
        ))
      ) : (
        <p>Brak zdjęć dla tego gatunku.</p>
      )}
    </div>
  );
}

export default SpeciesDetail;
