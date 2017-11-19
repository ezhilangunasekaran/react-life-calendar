import * as types from '../actions/actionTypes'

const initialState = {
    loaded: false,
    loading: false,
    events: {},
    dob:''
}

export default function events(state = initialState, action = {}){
    switch (action.type) {
        case types.WEEK_LOAD:
            return {
                ...state,
                events: action.events,
                dob: action.dob
            }
        default:
            return state;
    }
}