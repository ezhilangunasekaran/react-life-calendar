import React, { Component } from 'react'
import styled from 'styled-components'

const WeekStyle = styled.div`
    background: ${props => props.background || 'lightgrey'};
    cursor:pointer;
`

export default class Week extends Component{
    render (){
        const { event , current , onActiveClick } = this.props
        return(
            <WeekStyle onClick={event && onActiveClick} background={event ? 'lightgreen' : current ? '#BBDEFB' : undefined} />
        )
    }
}
