import './SearchFlightsPage.scss';
import React from 'react';
import SearchField from '../search-field';
import FlightsList from '../flights-list';

function SearchFlightsPage() {
  return (
    <>
      <SearchField />
      <FlightsList />
    </>
  );
}

export default SearchFlightsPage;