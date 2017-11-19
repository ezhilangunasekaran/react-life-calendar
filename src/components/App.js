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
    render() {
        let weeks = []
        for (let i = 1; i < 4693; i++) {
            weeks.push(<Week key={i} />)
        }
        return (
            <MuiThemeProvider>
                <LifeCalendar>
                    <Header/>
                    <WeekList>
                        {weeks}
                    </WeekList>
                    <SideBar>
                    </SideBar>
                    <Dialog open={false}>
                        <DatePicker />
                    </Dialog>
                </LifeCalendar>
            </MuiThemeProvider>
        );
    }
}

export default App