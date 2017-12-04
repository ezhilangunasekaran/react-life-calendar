import * as types from '../actions/actionTypes'

const initialState = {
    loaded: false,
    loading: false,
    events: {},
    dob:'',
    dobModelOpen: true
}

export default function events(state = initialState, action = {}){
    switch (action.type) {
        case types.WEEK_LOAD:
            return {
                ...state,
                events: action.events,
                dob: action.dob,
                dobModelOpen: true
            }
        case types.SET_DOB:
            return {
                ...state,
                dob: action.dob
            }
        default:
            return state;
    }
}