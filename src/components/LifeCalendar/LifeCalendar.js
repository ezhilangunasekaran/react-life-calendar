import React, { Component } from 'react'
import { Grid } from '../Grid'

class LifeCalendar extends Component {
    render(){
        const { children } = this.props
        return (
            <Grid gridTemplateRows= "40px auto" gridTemplateColumns='1fr auto' justifyContent="center">
                {children}
            </Grid>
        )
    }
}

export default LifeCalendar
