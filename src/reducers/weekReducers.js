import * as types from '../actions/actionTypes'

const initialState = {
    loaded: false,
    loading: false,
    events: {},
    dob:'',
    dobModelOpen: true,
    eventModelOpen: false,
}

export default function events(state = initialState, action = {}){
    switch (action.type) {
        case types.WEEK_LOAD:
            return {
                ...state,
                events: action.events,
                dob: action.dob,
                dobModelOpen: false
            }
        case types.WEEK_FAIL:
            return {
                ...state,
                dobModelOpen: true
            }

        case types.SET_DOB:
            return {
                ...state,
                dob: action.dob,
                dobModelOpen: false,
                events: {1: [{date: action.dob, event: 'my b day'}]}
            }
        case types.MODIFY_DOB:
            return {
                ...state,
                dobModelOpen: true
            }
        case types.OPEN_EVENT_MODAL:
            return {
                ...state,
                eventModelOpen: true
            }
        case types.CLOSE_EVENT_MODAL:
            return {
                ...state,
                eventModelOpen: true
            }
        case types.ADD_EVENT:
            return {
                ...state,
                eventModelOpen: false,
                events: action.events
            }
        case types.DELETE_EVENT:
            return {
                ...state,
                events: action.events
            }
        default:
            return state;
    }
}