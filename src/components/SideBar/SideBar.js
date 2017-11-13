import React, { Component } from 'react'
import { Grid } from '../Grid'

export default class SideBar extends Component {
    render () {
        const { activeWeek } = this.props
        return (
            <Grid width='300px'>SideBar! ({activeWeek})</Grid>
        )
    }
}