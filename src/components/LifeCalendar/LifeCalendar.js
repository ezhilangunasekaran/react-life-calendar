import React, { Component } from 'react'
import { Grid } from '../Grid'
import WeekList from '../WeekList'
import SideBar from '../SideBar'

class LifeCalendar extends Component {
    state = { modelOpen: false, sideBarOpen: false, activeWeek: 0 }
    render(){
        const children = React.Children.map(this.props.children, child => {
            if(child.type === WeekList){
                return React.cloneElement(child,{
                    onActiveClick : activeWeek => this.setState({ sideBarOpen: true, activeWeek })
                })
            }
            if(child.type === SideBar){
                return React.cloneElement(child,{
                    sideBarOpen : this.state.sideBarOpen,
                    activeWeek : this.state.activeWeek
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

export default LifeCalendar
