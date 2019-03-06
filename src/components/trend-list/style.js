import styled from 'styled-components';

export const Project = styled.li`
    background-color: #f0f0f0;
    border-radius: 5px;
    max-width: 290px;
    min-width: 250px;
    padding: 50px;
    margin: 10px;
    font-size: 15px;
    text-align: center;
    
    .rank {
        font-size: 30px;
        margin: 0 0 10px 0;
    }

    .avatar{
        width: 80%;
        height: auto;
        border-radius: 5px;
    }

    .name {
        display: block;
        color: #bb2e1f;
        font-size: 20px;
        font-weight: bold;
        margin: 10px 0 0 0;
    }
    
    .description {
        margin: 10px 0;
        font-style: italic; 
    }

    .user {
        display: block;
        color: #000;
        font-weight: bold;
        margin: 0 0 10px 0;
    }
`;

export const ProjectList = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;