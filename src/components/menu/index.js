import React, { Component } from 'react';
import { Navbar } from './style.js';

class Menu extends Component {
    render() {
        return (
            <Navbar>
                <li active="true">Trends</li>
                <li>Battle (soon)</li>
            </Navbar>
        );
    }
}

export default Menu;