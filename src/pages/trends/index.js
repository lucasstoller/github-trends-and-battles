import React, { Component } from 'react';

import Categories from '../../components/categories';
import TrendList from '../../components/trend-list';

const trendList = [
    {id:1, repo_name: "freeCodeCamp", user_name: "freeCodeCamp", stars: 297.840, forks: 21.043, open_issues: 4.008},
    {id:2, repo_name: "twbs", user_name: "twbs", stars: 297.840, forks: 21.043, open_issues: 4.008},
    {id:3, repo_name: "vuejs", user_name: "vuejs", stars: 297.840, forks: 21.043, open_issues: 4.008},
    {id:4, repo_name: "facebook", user_name: "facebook", stars: 297.840, forks: 21.043, open_issues: 4.008},
    {id:5, repo_name: "tensorflow", user_name: "tensorflow", stars: 297.840, forks: 21.043, open_issues: 4.008}
]

class Trends extends Component {
    render() {
        return (
            <div className="Trends">
                <Categories></Categories>
                <TrendList trendList={trendList}></TrendList>
            </div>
        );
    }
}

export default Trends;

