import React, { Component } from 'react'
import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: ${props => props.gridTemplateColumns ? props.gridTemplateColumns : '1fr'};
    grid-template-rows: ${props => props.gridTemplateRows ? props.gridTemplateRows : '1fr'};
    ${props => props.gridColumn && ('grid-column:' + props.gridColumn +';')}
    ${props => props.gridGap && ('grid-gap:' + props.gridGap + ';')}
    ${props => props.background && ('background:' + props.background + ';')}
    ${props => props.width && ('width:' + props.width + ';')}
    ${props => props.padding && ('padding:' + props.padding + ';')}
`
