import React, { Component } from 'react';
import ProjectStats from '../project-stats';
import { Project } from './style.js';

class TrendList extends Component {
    render() {
        const { trendList } = this.props;
        const list = trendList.map(item => (
            <Project key={item.id}>
                <div className="rank">#{item.id}</div>
                <div className="project-image"></div>
                <div className="project-name">{item.repo_name}</div>
                <div className="user-name">{item.user_name}</div>
                <ProjectStats stats={{
                    stars: item.stars, 
                    forks: item.forks, 
                    openIssues: item.open_issues
                }}>
                </ProjectStats>
            </Project>
        ));

        return (
            <ul className="repository-list">
                {list}
            </ul>
        );
    }
}

export default TrendList;
