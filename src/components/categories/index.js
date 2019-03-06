import React, { Component } from 'react';
import {CategoryList} from './style.js';

class Categories extends Component {
    constructor(){
        super();
        this.state = {
            categories: ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']
        }
    }

    handleClick(category){
        this.props.changeToCategory(category);
    }
    render() {
        const activeItem = this.props.category;
        console.log(activeItem);
        
        const items = this.state.categories.map(item => (
            <li key={item} 
                active={ item === activeItem && "true" } 
                onClick={this.handleClick.bind(this, item)}>{item}</li>
        ));
        return (
            <CategoryList>
                {items}
            </CategoryList>
        );
    }
}

export default Categories;

