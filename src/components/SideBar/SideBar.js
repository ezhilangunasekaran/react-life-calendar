import React, { Component } from 'react'
import { Grid } from '../Grid'

export default class SideBar extends Component {
    render () {
        const { sideBarOpen, activeWeek } = this.props
        return (
            sideBarOpen && <Grid width='300px'>SideBar! ({activeWeek})</Grid>
        )
    }
}