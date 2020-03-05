// import { createSelector } from 'reselect';

export const flightsListSelector = (state) => {
  return state.flights.flightsList;
};

// export const filtredFlightsListSelector = createSelector(
//   [flightsListSelector],
//   (flightsList) => {
//     return flightsList
//       .filter();
//   }
// );