import React, { Component } from 'react'
import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns ? props.gridTemplateColumns : '1fr'};
    grid-template-rows: ${props => props.gridTemplateRows ? props.gridTemplateRows : '1fr'};
    grid-column: ${props => props.gridColumn ? props.gridColumn : '1'};
    grid-gap: ${props => props.gridGap ? props.gridGap : '0'};
    background: ${props => props.color ? props.color : '#fff'};
    align-items: '';
    justify-content: center;
`