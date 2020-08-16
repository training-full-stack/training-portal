import React, { Component } from 'react';
import SideBarContent from '../components/common/sideBarContent';

class SideBar extends Component {
    constructor(props) {
        super(props);
    }    

    routeClickHandler = (route) => {
        debugger;
        this.props.history.push(route);
    }

    render() {
        return (
        <div>
            <SideBarContent
                routeClickHandler = {this.routeClickHandler}
            />
        </div>
        );
    }
}

export default SideBar;