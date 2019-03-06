import styled from 'styled-components';

export const Navbar = styled.ul`
    display: flex;
    margin: 50px 0;

    li {
        margin-left: 25px;
        font-weight:bold;
        cursor: pointer;
    }

    li[active] {
        color: #bb2e1f;
    }
`;

