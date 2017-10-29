import React, { Component } from 'react'
import { Grid } from '../Grid'
import { Week } from '../Week'
import Header from '../Header'

class LifeCalendar extends Component{
    render(){
        let weeks =[]
        let current = 2000
        let events = [1, 6, 500, 1550]
        let weekType = ''
        for(let i=1;i<4693;i++){
            events.filter(event => event === i).toString() === i.toString()
            ? weeks.push(<Week event/>) : i <= current
                    ? weeks.push(<Week current/>) : weeks.push(<Week/>)
        }
        return(
            <Grid gridTemplateRows='40px auto' gridGap='10px'>
                <Header />
                <Grid gridTemplateColumns='repeat(52,15px)' gridTemplateRows='repeat(90,7px)' gridGap='2px'>
                {weeks}
                </Grid>
            </Grid>
        )
    }
}

export default LifeCalendar
