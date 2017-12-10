import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField';
import Dialog from 'material-ui/Dialog'
import { Grid } from '../Grid'
import moment from 'moment'

export default class AddEvent extends Component {
    state = { eventDate:'', eventTitle:''}

    getEventDate = (event, date) => {
        this.setState({eventDate: moment(date).format('L')})
    }
    getEventTitle = (event) => {
        this.setState({eventTitle: event.target.value})
    }
    addEvent = () => {
        const { eventDate, eventTitle } = this.state
        if(eventDate && eventTitle){
            this.props.addEvent(eventDate, eventTitle)
        }
    }
    render () {
        const { eventModelOpen } = this.props
        return (
            <Dialog open={eventModelOpen} contentStyle={{maxWidth: '304px' }}>
                <Grid gridTemplateRows='auto auto auto' gridGap='10px' alignItems='flex-start'>
                    <DatePicker floatingLabelText='Select An Event' onChange={this.getEventDate} />
                    <TextField floatingLabelText='eventname' type="text" hintText="Event Title" onChange={this.getEventTitle}/>
                    <Grid gridTemplateColumns='120px 120px' gridGap='8px' alignItems='flex-start'>
                        <Grid background='#A4C639'
                              color='#FFF' padding='10px' alignItems='center' justifyContent='center'
                              cursor='pointer' onClick={this.addEvent}>ADD EVENT</Grid>
                        <Grid background='#ff4081'
                              color='#FFF' padding='10px' alignItems='center' justifyContent='center'
                              cursor='pointer' >CLOSE</Grid>
                    </Grid>
                </Grid>
            </Dialog>
        )
    }
}