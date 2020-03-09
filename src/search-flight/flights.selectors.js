import { createSelector } from 'reselect';

export const flightsListSelector = (state) => {
  return state.flights.flightsList;
};

export const departureFlightsListSelector = createSelector(
  [flightsListSelector],
  (flightsList) => {
    if (flightsList.length === 0) return flightsList;
    return flightsList.body.departure;
  }
);

export const arrivalFlightsListSelector = createSelector(
  [flightsListSelector],
  (flightsList) => {
    if (flightsList.length === 0) return flightsList;
    return flightsList.body.arrival;
  }
);