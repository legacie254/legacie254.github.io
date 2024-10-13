import React from 'react';

const travelPackages = [
  {
    id: 1,
    title: 'Exotic Destinations',
    description: 'Explore the most exotic places in the world.',
    price: '$2000'
  },
  {
    id: 2,
    title: 'Cultural Experiences',
    description: 'Immerse yourself in rich cultural experiences.',
    price: '$1500'
  },
  {
    id: 3,
    title: 'Relaxing Retreats',
    description: 'Relax and rejuvenate in serene locations.',
    price: '$1800'
  }
];

function TravelPackages() {
  return (
    <div className="travel-packages">
      {travelPackages.map(package.=> (
        <div key={package.id} className="package">
          <h3>{package.title}</h3>
          <p>{package.description}</p>
          <p><strong>{package.price}</strong></p>
        </div>
      ))}
    </div>
  );
}

export default TravelPackages;
