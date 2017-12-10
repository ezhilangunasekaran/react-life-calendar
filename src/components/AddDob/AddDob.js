import React, { Component } from 'react';
import DatePicker from 'material-ui/DatePicker'
import Dialog from 'material-ui/Dialog'
import { Grid } from '../Grid'
import moment from 'moment'

export default class AddDob extends Component {
    state = { dob: undefined}
    getDob = (event, date) => {
        this.setState({dob: moment(date).format('L')})
    }
    setDob = () => {
        if(this.state.dob) {
            this.props.setDob(this.state.dob)
        }
    }
    render () {
        const { dobModelOpen } = this.props
        return (
            <Dialog open={dobModelOpen} contentStyle={{maxWidth: '570px' }}>
                <Grid gridTemplateColumns='1fr 120px 120px' gridGap='10px'>
                    <DatePicker floatingLabelText='Select your DOB' onChange={this.getDob} />
                    <Grid>
                        <Grid background='#A4C639'
                              color='#FFF' padding='10px' alignItems='center' justifyContent='center'
                              cursor='pointer' onClick={this.setDob}>ADD DOB</Grid>
                    </Grid>
                </Grid>
            </Dialog>
        )
    }
}