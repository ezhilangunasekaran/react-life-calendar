import React, { Component } from 'react';
import Week from './Week'
import WeekList from './WeekList'
import Header from './Header'
import SideBar from './SideBar'
import AddDob from './AddDob'
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//redux
import { setDob } from '../actions/weekActions'
// storybook components

import LifeCalendar from './LifeCalendar'



class App extends Component {
    setDob = (dob) => {
        this.props.setDob(dob)
        this.setState({modelOpen: false})
    }

    render() {
        const { dobModelOpen } = this.props
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
                    <AddDob dobModelOpen={dobModelOpen} setDob={this.setDob} />
                </LifeCalendar>
            </MuiThemeProvider>
        );
    }
}
const mapStateToProps = state => {
    return {
        dobModelOpen: state.weeks.dobModelOpen
    }
}

export default connect(mapStateToProps,{ setDob })(App)

