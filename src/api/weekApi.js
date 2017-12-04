
const RC_LC = 'rc-lc'


class weekApi {
    static getAllEvents(){
        return Promise.resolve().then(() => {
            const WeekData = localStorage.getItem(RC_LC) ? JSON.parse(localStorage.getItem(RC_LC)) : {dob: '', events: {}}
            return WeekData
        })
    }
    static setDob(dob) {
        return Promise.resolve().then(() => {
            const initialWeekEvent = {dob: dob, events: {1: ['my b day']}}
            localStorage.setItem('rc-lc', JSON.stringify(initialWeekEvent))
        })
    }
}

export default weekApi