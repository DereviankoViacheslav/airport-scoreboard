import './FlightsList.scss';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';
import { departureFlightsListSelector, arrivalFlightsListSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';
import qs from 'qs';
import Flight from '../flight';

const filterFlightsList = (flightsList, queryString) => {
  if (!queryString) return flightsList;
  return flightsList.filter((flight) => {
    const fltNo = `${flight['carrierID.IATA']}${flight.fltNo}`;
    return fltNo.toLowerCase().includes(queryString.toLowerCase());
  });
};

const createFlightsList = (flightsList, flightDirection) => {
  return flightsList.map((flight) => {
    let data = {
      term: flight.term,
      fltNo: `${flight['carrierID.IATA']}${flight.fltNo}`,
      airportName: flight['airportToID.name_en'] || flight['airportFromID.name_en'],
      localTime: flight.timeDepShedule,
      timeStatus: flight.timeTakeofFact,
      status: flight.status,
      name: flight.airline.en.name,
      logoUrl: flight.airline.en.logoSmallName,
    };
    if (flightDirection === 'arrivals') {
      data = {
        ...data,
        localTime: flight.timeToStand,
        timeStatus: flight.timeLandFact,
      };
    }
    return (
      <Flight key={flight.ID} {...data} />
    );
  })
};

const FlightsList = ({ departureFlightsList, arrivalFlightsList }) => {
  const [flightsList, setFlightsList] = useState([]);
  const [status, setStatus] = useState('');
  const { direction } = useParams();
  const location = useLocation();

  useEffect(() => {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (direction && direction.includes('arrivals')) {
      setFlightsList(filterFlightsList(arrivalFlightsList, query.search));
      setStatus('arrivals');
    } else {
      setFlightsList(filterFlightsList(departureFlightsList, query.search));
      setStatus('departures');
    }
  }, [location, departureFlightsList, arrivalFlightsList]);

  return (
    <>
      {createFlightsList(flightsList, status)}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    departureFlightsList: departureFlightsListSelector(state),
    arrivalFlightsList: arrivalFlightsListSelector(state),
  };
};

const mapDispatchToProps = {
  getFlightsList: flightsActions.fetchFlightsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsList);