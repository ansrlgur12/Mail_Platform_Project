import React from 'react';
import styled from 'styled-components';
import Top from './Top';
import Main from './Main';

const List = () => {
    return (
        <ListStyle>
            <Top />
            <Main />
        </ListStyle>
    );
};

export default List;

const ListStyle = styled.div`
    width: 1145px;
    padding: 50px;
`;
