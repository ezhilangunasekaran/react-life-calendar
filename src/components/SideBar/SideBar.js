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
        return (
            sideBarOpen && (<Grid gridGap='20px'
                                  padding='10px 20px 0 0'
                                  width='300px' height="calc(100vh - 40px)" alignContent='start'>
                <Grid>
                    {events[activeWeek] && events[activeWeek].map((event, key) =>
                        <Grid border='border-bottom:1px solid #ddd' padding='10px 0' gridTemplateColumns='auto 60px' gridTemplateRows='1fr auto'>
                            <Grid fontSize='17px'>{event.event}</Grid>
                            <Grid fontSize='10px'>{event.date}</Grid>
                            <Grid justifyContent='center' alignContent='center' height='24px' fontSize='12px'
                                  background='#ff4081' color='#fff' gridColumn='2/3' cursor='pointer'
                                  gridRow='1/3' onClick={() => this.deleteEvent(activeWeek, key)}>Delete</Grid>
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