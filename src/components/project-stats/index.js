import React, { Component } from 'react';

class ProjectStats extends Component {
    render() {
        const { stars, forks, openIssues } = this.props.stats;
        return (
            <div className="project-stats">
                <div className="stars">{stars} stars</div>
                <div className="forks">{forks} forks</div>
                <div className="open-issues">{openIssues} open issues</div>
            </div>
        );
    }
}

export default ProjectStats;
