import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    ${props => props.gridTemplateColumns && ('grid-template-columns:' + props.gridTemplateColumns +';')}
    ${props => props.gridTemplateRows && ('grid-template-rows:' + props.gridTemplateRows +';')}
    ${props => props.gridColumn && ('grid-column:' + props.gridColumn +';')}
    ${props => props.gridGap && ('grid-gap:' + props.gridGap + ';')}
    ${props => props.alignItems && ('align-items:' + props.alignItems + ';')}
    ${props => props.alignContent && ('align-content:' + props.alignContent + ';')}
    ${props => props.justifyContent && ('justify-content:' + props.justifyContent + ';')}
    ${props => props.background && ('background:' + props.background + ';')}
    ${props => props.border && (props.border + ';')}
    ${props => props.color && ('color:' + props.color + ';')}
    ${props => props.fontSize && ('font-size:' + props.fontSize + ';')}
    ${props => props.width && ('width:' + props.width + ';')}
    ${props => props.height && ('height:' + props.height + ';')}
    ${props => props.padding && ('padding:' + props.padding + ';')}
    ${props => props.cursor && ('cursor:' + props.cursor + ';')}
`
