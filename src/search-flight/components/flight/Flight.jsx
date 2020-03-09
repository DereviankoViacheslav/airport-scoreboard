import './Flight.scss';
import React from 'react';
import moment from 'moment';

function Flight(props) {
  const timeTakeofFact = moment(props.timeTakeofFact).format('HH:mm');
  const timeToStand = moment(props.timeToStand).format('HH:mm');
  const { term, fltNo, status, name, logoUrl, } = props;
  return (
    <tr >
      <td className="terminal-field"><span>{term}</span></td>
      <td className="time-field">{timeTakeofFact}</td>
      <td className="way-field"><span>{'City...'}</span></td>
      <td className="status-field"><span>{`${status} at ${timeToStand}`}</span></td>
      <td className="company-name">
        <span className="logo"><img src={logoUrl} alt={name} /><span>{name}</span></span>
      </td>
      <td className="flight-field"><span>{`${fltNo}`}</span></td>
      <td className="details-field">
        <span><a href="#" className="">Flight details</a></span>
      </td>
    </tr>
  );
}

export default Flight;