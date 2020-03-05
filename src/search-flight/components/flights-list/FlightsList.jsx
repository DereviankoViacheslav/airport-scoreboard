import './FlightsList.scss';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { flightsListSelector } from '../../flights.selectors';
import * as flightsActions from '../../flights.actions';
import Flight from '../flight';

function FlightsList({ getFlightsList, flightsList }) {
  useEffect(() => {
    getFlightsList('05-03-2020');
  }, []);

  console.log(flightsList);
  
  return (
    <div className="flights-list">
      <div className="flights-list__switcher">
        <div className="flights-list__btn flights-list__btn_departures flights-list__btn_active">
          <i className="material-icons">flight_takeoff</i>
          Departures
        </div>
        <div className="flights-list__btn flights-list__btn_arrivals">
          <i className="material-icons">flight_land</i>
          Arrivals
        </div>
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
            <Flight />
            <Flight />
            <Flight />
            <Flight />
          </tbody>
        </table>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    flightsList: flightsListSelector(state),
  };
};

const mapDispatchToProps = {
  getFlightsList: flightsActions.getFlightsList,
};

export default connect(mapStateToProps, mapDispatchToProps)(FlightsList);