import './FlightsSchedule.scss';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { departureFlightsListSelector, arrivalFlightsListSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';
import { Link, useLocation } from 'react-router-dom';
import FlightsList from '../flights-list';

function FlightsSchedule({ getFlightsList, departureFlightsList, arrivalFlightsList }) {
  const [status, setStatus] = useState('departures');
  const location = useLocation();
  const departureClass = status === 'departures' ? 'flights-list__btn_active' : '';
  const arrivalClass = status === 'arrivals' ? 'flights-list__btn_active' : '';

  console.log(departureFlightsList);

  useEffect(() => {
    if (location.pathname.includes('departures')) {
      setStatus('departures');
    }
    if (location.pathname.includes('arrivals')) {
      setStatus('arrivals');
    }
    getFlightsList('09-03-2020');
  }, [location.pathname]);

  return (
    <div className="flights-list">
      <div className="flights-list__switcher">
        <Link
          to='/departures'
          className={`flights-list__btn flights-list__btn_departures ${departureClass}`}
        >
          <i className="material-icons">flight_takeoff</i>
          Departures
        </Link>
        <Link
          to='/arrivals'
          className={`flights-list__btn flights-list__btn_arrivals ${arrivalClass}`}
        >
          <i className="material-icons">flight_land</i>
          Arrivals
        </Link>
      </div>
      <div className="flights-list__table-wrapper">
        <table className="flights-list__table flights-table">
          <thead className="flights-table__header">
            <tr>
              <th>Terminal</th>
              <th>Local time</th>
              <th>Destination</th>
              <th>Status</th>
              <th>Airline</th>
              <th>Flight</th>
            </tr>
          </thead>
          <tbody>
            <Route
              exact
              path='/'
              render={() => {
                return <FlightsList flightsList={departureFlightsList} />
              }}
            />
            <Route
              exact
              path='/departures'
              render={() => {
                return <FlightsList flightsList={departureFlightsList} />
              }}
            />
            <Route
              path="/departures/:id"
              render={({ match }) => {
                const list = [departureFlightsList.find((flight) => +flight.ID === +match.params.id)];
                return <FlightsList flightsList={list} />
              }}
            />
            <Route
              path='/arrivals'
              render={() => {
                return <FlightsList flightsList={arrivalFlightsList} />
              }}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    departureFlightsList: departureFlightsListSelector(state),
    arrivalFlightsList: arrivalFlightsListSelector(state),
  };
};

const mapDispatchToProps = {
  getFlightsList: flightsActions.getFlightsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsSchedule);