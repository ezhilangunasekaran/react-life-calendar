import React, { Component } from 'react'
import { Grid } from '../Grid'
import Week from '../Week'

export default class WeekList extends Component {
    render () {
        let current = 2000
        let events = [1, 6, 500, 1550]
        const { onActiveClick } = this.props
        const children = React.Children.map(this.props.children, (child, key) => {
            if(child.type === Week){
                return React.cloneElement(child,{
                    event: events.filter(event => event === key).toString() === key.toString() || undefined,
                    current: key <= current || undefined,
                    onActiveClick : () => onActiveClick(key)
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