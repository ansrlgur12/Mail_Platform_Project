import React from 'react';
import styled from 'styled-components';
import Top from './Top';
import Main from './Main';
import Bottom from './Bottom';

const List = () => {
    return (
        <ListStyle>
            <Top />
            <Main />
            <Bottom />
        </ListStyle>
    );
};

export default List;

const ListStyle = styled.div`
    width: 1145px;
    padding: 50px;
`;
