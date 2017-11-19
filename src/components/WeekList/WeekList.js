import React, { Component } from 'react'
import { Grid } from '../Grid'
import Week from '../Week'

export default class WeekList extends Component {
    state = {events: {}}
    componentWillReceiveProps(nextProps){
        this.setState({events: nextProps.events})
    }
    render () {
        let current = 2000
        const { onActiveClick } = this.props
        const { events } = this.state
        const children = React.Children.map(this.props.children, (child, key) => {
            if(child.type === Week){
                return React.cloneElement(child,{
                    event: Object.keys(events).filter(event => parseInt(event) === key).toString() === key.toString() || undefined,
                    key: key,
                    current: key <= current || undefined,
                    onActiveClick : () => {onActiveClick(key)}
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