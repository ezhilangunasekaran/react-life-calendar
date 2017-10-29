import React, { Component } from 'react'
import { Grid } from '../Grid'
import { Week } from '../Week'
import Header from '../Header'

class LifeCalendar extends Component{
    render(){
        let weeks =[]
        for(let i=0;i<4693;i++){
            weeks.push(<Week />)
        }
        return(
            <Grid gridTemplateRows='40px auto' gridGap='10px'>
                <Header />
                <Grid gridTemplateColumns='repeat(52,10px)' gridTemplateRows='repeat(90,10px)' gridGap='5px'>
                {weeks}
                </Grid>
            </Grid>
        )
    }
}

export default LifeCalendar
