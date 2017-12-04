import styled from 'styled-components'

export const Button = styled.div`
    ${props => props.background && ('background:' + props.background + ';')}
    ${props => props.color && ('color:' + props.color + ';')}
    padding: 10px;
`

