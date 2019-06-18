import React, { Component } from 'react';
import { connect } from "react-redux";

import { createIncident } from "../actions/actions";


function mapDispatchToProps(dispatch) {
  return {
    createIncident: incident => dispatch(createIncident(incident))
  };
}
class CreateIncidentForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      assignee: "Admin",
      status: "RECEIVED"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title, assignee, status } = this.state;

    this.props.createIncident({ title, assignee, status });
    this.setState({ title: "", assignee: ""});
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            Incident: <input className="form-control" type="text" id="title" onChange={this.handleChange}></input>
          </div>
          <div className="form-group">
          Assignee: <select className="form-control" id="assignee" onChange={this.handleChange}>
            <option>Admin</option>
            <option>Engineer</option>
          </select>
          </div>
          <button type="submit" className="btn btn-success btn-lg">
            SAVE
        </button>

        </form>
      </div>
    )
  }
}
const CreateIncident = connect(null, mapDispatchToProps)(CreateIncidentForm);
export default CreateIncident;
