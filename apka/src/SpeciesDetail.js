import React from 'react';
import { useParams } from 'react-router-dom';
import data from './data';
import video from './video';

function formatSpeciesName(key) {
  const name = key.replace(/_/g, ' ');
  return name.charAt(0).toUpperCase() + name.slice(1);
}

function SpeciesDetail() {
  var video_url = ""
  const { name } = useParams();
  if (video[name]) {
    video_url = "https://www.youtube.com/embed/" +  video[name]['video_id']
  }
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
            src={`/grzyby/images/${name}/${image}`}
            alt={displayName}
            style={{ width: '300px', margin: '10px' }}
          />
        ))
      ) : (
        <p>Brak zdjęć dla tego gatunku.</p>
      )}
      { video_url ? 
      (<div className="video-container adjust">
        <iframe
          width="560"
          height="315"
          src={video_url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>) : ( <p>Brak wideo dla tego gatunku.</p>)
      }
    </div>
  );
}

export default SpeciesDetail;
