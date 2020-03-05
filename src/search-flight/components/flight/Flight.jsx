import './Flight.scss';
import React from 'react';

function Flight() {
  return (
    <tr >
      <td className="terminal-field"><span>A</span></td>
      <td className="time-field">4:45</td>
      <td className="way-field"><span>Minsk</span></td>
      <td className="status-field"><span>Departed at 4:49</span></td>
      <td className="company-name">
        <span className="logo"><img src="#" alt="Belavia" /><span>Belavia</span></span>
      </td>
      <td className="flight-field"><span>B2848</span></td>
      <td className="details-field">
        <span><a href="#" className="">Flight details</a></span>
      </td>
    </tr>
  );
}

export default Flight;