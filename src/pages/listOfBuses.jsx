import React from 'react';
import { acBuses, nonAcBuses, sleeperBuses } from '../constant/Index';

const CardGrid = () => {
  return (
    <div className="card">
      <h2>Bus Types</h2>
      <div className="row">

  

        <h3>Book Non-AC Buses</h3>
        <div className="bus-row">
          {nonAcBuses.map((bus) => (
            <div key={bus.id} className="col-4">
              <img src={bus.imgSrc} alt={`Non-AC Bus ${bus.id}`} className="image" />
              <p className="summary">Non-AC Bus {bus.id}</p>
            </div>
          ))}
        </div>

        <h3>Book AC Buses</h3>
        <div className="bus-row">
          {acBuses.map((bus) => (
            <div key={bus.id} className="col-6">
              <img src={bus.imgSrc} alt={`AC Bus ${bus.id}`} className="image" />
              <p className="summary">AC Bus {bus.id}</p>
            </div>
          ))}
        </div>

        <h3>Book Sleeper Buses</h3>
        <div className="bus-row">
          {sleeperBuses.map((bus) => (
            <div key={bus.id} className="col-6">
              <img src={bus.imgSrc} alt={`Sleeper Bus ${bus.id}`} className="image" />
              <p className="summary">Sleeper Bus {bus.id}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardGrid;
