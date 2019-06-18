import { CREATE_INCIDENT, UPDATE_INCIDENT } from "../constants/constants";

const initialState = { incidents: [] };

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_INCIDENT:
            action.payload.id = state.incidents.length;
            return Object.assign({}, state, {
                incidents: state.incidents.concat(action.payload)
            });


        case UPDATE_INCIDENT:
            return Object.assign({}, state, {
                incidents: state.incidents.map((incident, index) => {
                    if (index === action.index) {
                        if (incident.status === 'RECEIVED') {
                            return Object.assign({}, incident, {
                                status: 'ACKNOWLEDGED'
                            })
                        }
                        if (incident.status === 'ACKNOWLEDGED') {
                            return Object.assign({}, incident, {
                                status: 'RESOLVED'
                            })
                        }
                    }
                    return incident;
                })
            })

        default:
            return state;
    }
}

export default rootReducer;