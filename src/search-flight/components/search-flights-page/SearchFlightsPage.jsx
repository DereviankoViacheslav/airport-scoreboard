import './SearchFlightsPage.scss';
import React from 'react';
import SearchField from '../search-field';
import FlightsSchedule from '../flights-schedule';

function SearchFlightsPage() {
  return (
    <>
      <SearchField />
      <FlightsSchedule />
    </>
  );
}

export default SearchFlightsPage;