import styled from 'styled-components';

export const Project = styled.li`
    background-color: #f3f3f3;
    max-width: 30vw;
    min-width: 250px;
    display: inline-block;
    padding: 50px;
    margin: 10px;
    font-size: 15px;
    text-align: center;
    

    .project-name {
        color: #bb2e1f;
        font-size: 20px;
        font-weight: bold;
    }
    
    .user-name {
        font-weight: bold;
    }
`;

export const ProjectList = styled.ul`
    display: flex;
    justify-content: center;
`;