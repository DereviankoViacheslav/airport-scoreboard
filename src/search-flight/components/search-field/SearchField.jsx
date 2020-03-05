import './SearchField.scss';
import React from 'react';

function SearchField() {
  return (
    <div className="search-field">
      <h2 className="search-field__title">Search flight</h2>
      <form className="search-field__form" name="searchFlightsForm" action="">
        <i className="material-icons search-field__icon">search</i>
        <input
          className="search-field__input"
          type="text"
          placeholder="Airline, destination or flight #"
        />
        <button className="search-field__btn" type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchField;