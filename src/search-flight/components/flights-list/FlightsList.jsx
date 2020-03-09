import './FlightsList.scss';
import React from 'react';
import Flight from '../flight';

function FlightsList({ flightsList }) {
  return (
    <>
      {flightsList.map((flight) => {
        const data = {
          term: flight.term,
          fltNo: flight.fltNo,
          timeTakeofFact: flight.timeTakeofFact,
          timeToStand: flight.timeToStand,
          status: flight.status,
          name: flight.airline.en.name,
          logoUrl: flight.airline.en.logoSmallName,
        };
        return (
          <Flight key={flight.ID} {...data} />
        );
      })}
    </>
  );
}

export default FlightsList;