import { fetchFlights } from './flights-gateway';

export const FLIGHTS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const flightsListRecieved = (flightsList) => {
  return {
    type: FLIGHTS_LIST_RECIEVED,
    payload: { flightsList },
  };
};

export const getFlightsList = (date) => {
  const thunkAction = (dispatch) => {
    fetchFlights(date)
      .then(flightsList => {
        dispatch(flightsListRecieved(flightsList))
      });
  };
  return thunkAction;
};