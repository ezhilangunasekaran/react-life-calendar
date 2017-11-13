import React, { Component } from 'react';
import Week from './Week'
import WeekList from './WeekList'
import Header from './Header'
import SideBar from './SideBar'
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// storybook components

import LifeCalendar from './LifeCalendar'



class App extends Component {
    state = { modelOpen: false, sideBarOpen: false, activeWeek: 0 }
    componentDidMount() {
        // this.setState({ modelOpen: false})
    }
    onActiveClick = (activeWeek) =>{
        console.log(activeWeek)
        this.setState({ sideBarOpen: true, activeWeek })
    }
    render() {
        const {modelOpen, sideBarOpen, activeWeek} = this.state
        let weeks = []
        for (let i = 1; i < 4693; i++) {
            weeks.push(<Week />)
        }
    return (
        <MuiThemeProvider>
            <LifeCalendar>
                <Header/>
                <WeekList onActiveClick={() => {this.onActiveClick()}}>
                    {weeks}
                </WeekList>
                {sideBarOpen &&
                <SideBar activeWeek={activeWeek}>
                </SideBar>
                }
                <Dialog open={modelOpen}>
                    <DatePicker />
                </Dialog>
            </LifeCalendar>
        </MuiThemeProvider>
    );
  }
}

export default App;
