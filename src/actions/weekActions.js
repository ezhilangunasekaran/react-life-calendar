import weekApi from '../api/weekApi'
import * as types from './actionTypes'

export function getEvents(){
    return dispatch => {
        dispatch({
            type: types.WEEK_LOADING
        })
       return weekApi.getAllEvents().then(data =>{
           dispatch({
               type: types.WEEK_LOAD,
               events: data.events,
               dob: data.dob
           })
       })
    }
}

export function setDob(dob) {
    return dispatch => {
        dispatch({
            type: types.SET_DOB,
            dob: dob
        })
        return weekApi.setDob(dob)
    }
}
