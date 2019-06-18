import { CREATE_INCIDENT } from '../constants/constants';
import { UPDATE_INCIDENT } from '../constants/constants';

export function createIncident(payload) {
    return { type: CREATE_INCIDENT, payload }
  };

  export function updateIncident(index){
    return { type: UPDATE_INCIDENT, index }
  }
  