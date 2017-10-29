import React, { Component } from 'react'
import styled from 'styled-components'

export const Week = styled.div`
    background: ${props => props.event ? 'lightgreen' : 'lightblue'};
    width:10px;
    height:10px;
    border: 1px solid #999;
`