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
       }).catch(error => {
           console.log(error)
           dispatch({
               type: types.WEEK_FAIL
           })
       })
    }
}

export function setDob(dob) {
    return dispatch => {
        dispatch({
            type: types.SET_DOB,
            dob
        })
        return weekApi.setDob(dob)
    }
}

export function modifyDob() {
    return dispatch => {
        dispatch({
            type: types.MODIFY_DOB,
        })
    }
}

export function addEvent(eventDate, eventTitle) {
    return dispatch => {
        return weekApi.addEvent(eventDate, eventTitle).then(data =>{
            dispatch({
                type: types.ADD_EVENT,
                events: data.events
            })
        })
    }
}
export function addEventModel() {
    return dispatch => {
        dispatch({
            type: types.OPEN_EVENT_MODAL
        })
    }
}

export function deleteEvent(deletedWeek, key) {
    return dispatch => {
        return weekApi.deleteEvent(deletedWeek, key).then(data =>{
            dispatch({
                type: types.DELETE_EVENT,
                events: data.events
            })
        })
    }
}