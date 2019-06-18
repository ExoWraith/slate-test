import React from 'react';
import PropTypes from 'prop-types';

const Incident = ({ title, assignee, status, onClick }) => (

    <li className="list-group-item" >
           <div className="row">
             <div className="col-md-10">
               <ul style={{ listStyle: 'none' }}>
                 <li>{title}</li>
                 <li>Assignee : {assignee}</li>
                 <li>Status : {status}</li>
               </ul>
             </div>
             <div className="col-md-2"><button type="submit" className="btn btn-success btn-sm" onClick={onClick}>
               Update
    
         </button>
             </div></div></li>

)

Incident.propTypes = {
  title: PropTypes.string.isRequired,
  assignee: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default Incident