import React, { Component } from 'react';
import Categories from '../../components/categories';
import TrendList from '../../components/trend-list';
import { Loading } from './styles';

class Trends extends Component {
    constructor(){
        super();
        this.state = {
            category: 'All',
            trendList: [],
            loading: false
        }
    }

    changeToCategory(category){
        let url = '';
        if (category === 'All') {
            url = "https://api.github.com/search/repositories?q=stars:>0+fork:true&sort=stars&order=desc"
        } else {
            url = `https://api.github.com/search/repositories?q=language:${category}+fork:true&sort=stars&order=desc`
        }
        this.setState({loading: true});
        fetch(url)
            .then(res => {
                return res.json();
            })
            .then(data => {
                const trendList = data.items;                
                this.setState({trendList, category});
            })
            .finally(() => {
                this.setState({loading: false});
            })
    }

    componentDidMount(){
        this.changeToCategory('All');
    }

    render() {
        return (
            <div className="Trends">
                <Categories category={this.state.category} changeToCategory={this.changeToCategory.bind(this)}/>
                { this.state.loading ?
                    <Loading>
                        <img 
                            src={ require('../../images/pixelart-octocat.gif') }
                            className="octocat-gif" alt="Octocat gif"/>
                        <img src={ require('../../images/loading.gif') }
                            className="loading-gif" alt="Loading..."/>
                    </Loading>:<TrendList trendList={this.state.trendList} /> }
            </div>
        );
    }
}

export default Trends;

