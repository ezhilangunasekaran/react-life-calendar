import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Grid } from '../Grid'
import {connect} from 'react-redux'
import { deleteEvent } from '../../actions/weekActions'

class SideBar extends Component {
    state ={events:{},activeWeek:0 }
    componentWillReceiveProps(nextProps){
        this.setState({events: nextProps.events})
        this.setState({activeWeek: nextProps.activeWeek})
    }
    deleteEvent = (deletedWeek, key) => {
        this.props.deleteEvent(deletedWeek, key)
    }
    render () {
        const { sideBarOpen, closeSideBar } = this.props
        const { events, activeWeek} = this.state
        console.log(events[activeWeek])
        return (
            sideBarOpen && (<Grid gridGap='20px'
                                  padding='10px 20px 0 0'
                                  width='300px' height="calc(100vh - 40px)" alignContent='start'>
                <Grid>
                    {events[activeWeek].map((event, key) =>
                        <Grid border='border-bottom:1px solid #ddd' padding='10px 0'>
                            <Grid fontSize='17px'>{event.event}</Grid>
                            <Grid fontSize='10px'>{event.date}</Grid>
                            <Grid onClick={() => this.deleteEvent(activeWeek, key)}>Delete</Grid>
                        </Grid>
                    )}
                </Grid>
                <Grid background='#ff4081' color='#FFF' padding='10px' alignItems='center' justifyContent='center'
                      cursor='pointer'  onClick={closeSideBar}>Close</Grid>
            </Grid>)
        )
    }
}
const mapStateToProps = state => {
    const {
        weeks
    } = state
    return {
        weeks
    }
}

export default connect(mapStateToProps,{ deleteEvent })(SideBar)