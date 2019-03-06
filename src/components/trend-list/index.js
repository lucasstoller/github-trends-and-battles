import React, { Component } from 'react';
import ProjectStats from '../project-stats';
import { Project, ProjectList } from './style.js';

class TrendList extends Component {
    render() {
        const { trendList } = this.props;
        const list = trendList.map((item, index) => (
            <Project key={item.id}>
                <div className="rank">#{index + 1}</div>
                <img className="avatar" src={item.owner.avatar_url} alt={`Avatar for ${item.name}`} />
                <a href={item.html_url} className="name">{item.name}</a>
                <div className="description">{item.description}</div>
                <a href={item.owner.html_url} className="user">{item.owner.login}</a>
                <ProjectStats stats={{
                    stars: item.stargazers_count, 
                    forks: item.forks, 
                    openIssues: item.open_issues
                }}>
                </ProjectStats>
            </Project>
        ));

        return (
            <ProjectList>
                {list}
            </ProjectList>
        );
    }
}

export default TrendList;
