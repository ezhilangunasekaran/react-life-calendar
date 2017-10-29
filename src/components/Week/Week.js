import React, { Component } from 'react'
import styled from 'styled-components'

export const Week = styled.div`
    background: ${props => props.event ? 'lightgreen' : props.current ? 'lightblue' : 'lightgrey'};
    width:15px;
    height:7px;
    cursor:pointer;
`