import React, { Component } from 'react'
import { Grid } from '../Grid'
import Week from '../Week'

export default class WeekList extends Component {
    state = {events: {}, dob: new Date()}
    componentWillReceiveProps(nextProps){
        this.setState({events: nextProps.events, dob: nextProps.dob})
    }
    render () {
        const ONE_DAY = 1000*60*60*24;
        const { onActiveClick } = this.props
        const { events, dob} = this.state
        let dobParsed = new Date(dob).getTime();
        let current = Math.round(((new Date().getTime()-dobParsed)/ONE_DAY)/7);
        console.log(current)
        const children = React.Children.map(this.props.children, (child, key) => {
            if(child.type === Week){
                return React.cloneElement(child,{
                    event: Object.keys(events).filter(event => parseInt(event) === (key+1)).toString() === (key+1).toString() || undefined,
                    key: key+1,
                    current: (key+1) <= current || undefined,
                    onActiveClick : () => {onActiveClick(key+1)}
                })
            }
        })

        return (<Grid
            gridTemplateColumns="repeat(52,1fr)"
            gridTemplateRows="repeat(90,8px)"
            gridGap="2px" padding="10px 20px"
        >
            {children}
        </Grid>)
    }
}