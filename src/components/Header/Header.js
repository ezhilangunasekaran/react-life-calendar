import React, { Component } from 'react'
import { Grid } from '../Grid'
import {connect} from 'react-redux'
import { modifyDob, addEvent, addEventModel } from '../../actions/weekActions'
import AddEvent from '../AddEvent'


class Header extends Component{
    modifyDob = () =>{
        this.props.modifyDob()
    }
    addEventModel = () =>{
        this.props.addEventModel()
    }
    render (){
        const { addEvent, eventModelOpen } = this.props
        console.log(eventModelOpen)
        return(
            <Grid gridColumn='1/3' background="#2196F3" gridTemplateColumns='auto 120px 120px' gridGap='10px' padding='5px 20px'>
                <Grid color='#fff' fontSize='20px' alignItems='center'>Life Calendar!</Grid>
                <Grid background='#E3F2FD' color='#212121' padding='10px' alignItems='center' justifyContent='center'
                      cursor='pointer' fontSize='14px' onClick={this.modifyDob}><b>MODIFY DOB</b></Grid>
                <Grid background='#E3F2FD' color='#212121' padding='10px' alignItems='center' justifyContent='center'
                      cursor='pointer' fontSize='14px' onClick={this.addEventModel}><b>ADD EVENT</b></Grid>
                <AddEvent eventModelOpen={eventModelOpen} addEvent={addEvent} />
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        eventModelOpen: state.weeks.eventModelOpen
    }
}

export default connect(mapStateToProps,{ modifyDob, addEvent, addEventModel })(Header)

