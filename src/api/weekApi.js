
const mockWeekData = {dob:'03-09-1988', events: {1:['my b day'],1500:['just another random day']}}

class weekApi {
    static getAllEvents(){
        return new Promise((resolve, reject) => {
                resolve(Object.assign({},mockWeekData))
        })
    }
}

export default weekApi