import React, { Component } from 'react'
import { Grid } from '../Grid'
import { Label } from '../Label'

class Header extends Component{
    render (){
        return(
            <Grid color='#87cfe5' gridColumn='1/3' width="100vw" background="lightblue">
                <Label>Life Calendar!</Label>
            </Grid>
        )
    }
}

export default Header
