import React from "react";
import { connect } from 'react-redux'

import Incident from '../components/Incident';

const IncidentList = ({ incidents, onIncidentClick }) => (
  <ul>
    {incidents.map((incident, index) => (
      <Incident key={index} {...incident} onClick={() => onIncidentClick(index)} />
    ))}
  </ul>
)



export default IncidentList;