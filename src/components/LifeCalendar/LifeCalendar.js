import React, { Component } from 'react'
import { Grid } from '../Grid'
import WeekList from '../WeekList'
import SideBar from '../SideBar'
import {connect} from 'react-redux'
import { getEvents } from '../../actions/weekActions'

class LifeCalendar extends Component {
    componentWillMount(){
        this.props.getEvents()
    }
    state = { modelOpen: false, sideBarOpen: false, activeWeek: 0 }
    render(){
        const { dob, events } = this.props.weeks
        console.log(this.props.weeks)
        const children = React.Children.map(this.props.children, child => {
            if(child.type === WeekList){
                return React.cloneElement(child,{
                    onActiveClick : activeWeek => this.setState({ sideBarOpen: true, activeWeek }),
                    events
                })
            }
            if(child.type === SideBar){
                return React.cloneElement(child,{
                    sideBarOpen : this.state.sideBarOpen,
                    activeWeek : this.state.activeWeek,
                    closeSideBar: () => this.setState({ sideBarOpen: false })
                })
            }else{
                return child
            }
        })
        return (
            <Grid gridTemplateRows= "40px auto" gridTemplateColumns='1fr auto' justifyContent="center">
                {children}
            </Grid>
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

export default connect(mapStateToProps,{ getEvents })(LifeCalendar)