import React, { Component } from 'react'
import { Grid } from '../Grid'

export default class SideBar extends Component {
    state ={events:{},activeWeek:0 }
    componentWillReceiveProps(nextProps){
        this.setState({events: nextProps.events})
        this.setState({activeWeek: nextProps.activeWeek})
    }
    render () {
        const { sideBarOpen, closeSideBar } = this.props
        const { events, activeWeek} = this.state
        console.log(events[activeWeek])
        return (
            sideBarOpen && (<Grid width='300px' height="calc(100vh - 40px)" >
                <Grid>
                    {events[activeWeek].map(event =>
                    <Grid>{event}</Grid>
                    )}
                </Grid>
                <Grid><button onClick={closeSideBar}>Close</button></Grid>
            </Grid>)
        )
    }
}