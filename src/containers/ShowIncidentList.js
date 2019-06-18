import { connect } from 'react-redux'
import IncidentList from '../components/IncidentList'
import { updateIncident } from '../actions/actions';

const getIncidentList = (incidents) => {
    return incidents;
}

const mapStateToProps = state => {
    return {
        incidents: getIncidentList(state.incidents)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncidentClick: id => {
            dispatch(updateIncident(id))
        }
    }
}


const ShowIncidentList = connect(
    mapStateToProps,
    mapDispatchToProps
)(IncidentList)

export default ShowIncidentList;