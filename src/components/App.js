import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker';
import Dialog from 'material-ui/Dialog';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// storybook components

import LifeCalendar from './LifeCalendar'



class App extends Component {
    state ={ modelOpen:false }
  render() {
    return (
        <MuiThemeProvider>
            <LifeCalendar/>
            <Dialog open={this.state.modelOpen}>
                <DatePicker></DatePicker>
            </Dialog>
        </MuiThemeProvider>
    );
  }
}

export default App;
