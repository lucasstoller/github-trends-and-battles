import styled from 'styled-components';

export const CategoryList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 50px 0;

    li {
        margin-left: 25px;
        cursor: pointer;
    } 
    li[active]{
        color: #bb2e1f;
        font-weight:bold;
    }
`;