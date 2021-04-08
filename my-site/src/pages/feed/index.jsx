import React, { Component } from 'react';
import Molde from '../../components/molde-feed-perfil/molde-feed';
import MoldeSidebar from '../../components/molde-sidebar/molde-sidebar';




export default class Feed extends Component{
    render(){
        return(
            <div>  
            <MoldeSidebar/>
            <Molde/>
            </div>
        )
    }
}