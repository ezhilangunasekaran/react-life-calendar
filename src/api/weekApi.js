
const RC_LC = 'rc-lc'


class weekApi {
    static getAllEvents(){
        return Promise.resolve().then(() => {
            const WeekData = localStorage.getItem(RC_LC) && JSON.parse(localStorage.getItem(RC_LC))
            return WeekData
        })
    }
    static setDob(dob) {
        return Promise.resolve().then(() => {
            const initialWeekEvent = {dob: dob, events: {1: [{date: dob,event: 'my b day'}]}}
            localStorage.setItem('rc-lc', JSON.stringify(initialWeekEvent))
        })
    }
    static addEvent(eventDate, eventTitle) {
        return Promise.resolve().then(() => {
            const ONE_DAY = 1000*60*60*24;
            const currentData = JSON.parse(localStorage.getItem(RC_LC))
            const eventDateToTime = new Date(eventDate).getTime()
            const dobToSec = new Date(currentData.dob).getTime()
            const events = currentData.events
            let updatedWeek =[]
            let updatedEvents = {}
            const weekNo = Math.round(((eventDateToTime - dobToSec)/ONE_DAY)/7);
            if(events[weekNo]){
                updatedWeek = [...events[weekNo], {date: eventDate, event: eventTitle}]
                updatedEvents = Object.assign({},events,{[weekNo]: updatedWeek})
            }else {
                updatedEvents = Object.assign({},events,{[weekNo]: [{date: eventDate, event: eventTitle}]})
            }
            const modifiedEventsData = Object.assign({}, currentData, {events: updatedEvents})
            localStorage.setItem('rc-lc', JSON.stringify(modifiedEventsData))
            return modifiedEventsData
        })
    }
    static deleteEvent(deletedWeek, key){
        return Promise.resolve().then(() => {
            const currentData = JSON.parse(localStorage.getItem(RC_LC))
            const events = currentData.events
            const deletedWeekEvents = events[deletedWeek].filter((event,k) => k !== key)
            let finalUpdatedEvents = []
            if(deletedWeekEvents.length === 0){
                delete events[deletedWeek]
                finalUpdatedEvents = Object.assign({}, events)
            } else{
                finalUpdatedEvents = Object.assign({}, events,{[deletedWeek]: deletedWeekEvents} )
            }
            const modifiedEventsData = Object.assign({}, currentData, {events: finalUpdatedEvents})
            localStorage.setItem('rc-lc', JSON.stringify(modifiedEventsData))
            return modifiedEventsData
        })
    }
}

export default weekApi