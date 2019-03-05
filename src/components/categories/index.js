import React, { Component } from 'react';
import {CategoryList} from './style.js';

class Categories extends Component {
    render() {
        return (
            <CategoryList>
                <li active="true">All</li>
                <li>Javascript</li>
                <li>Ruby</li>
                <li>Java</li>
                <li>CSS</li>
                <li>Python</li>
            </CategoryList>
        );
    }
}

export default Categories;

