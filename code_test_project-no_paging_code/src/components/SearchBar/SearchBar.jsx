import React from 'react';
import Top from './Top';
import Main from './Main';
import styled from 'styled-components';

const SearchBar = () => {
    return (
        <SearchBarStyle>
            <Top />
            <Main />
        </SearchBarStyle>
    );
};

export default SearchBar;

const SearchBarStyle = styled.div`
    width: 1145px;
    padding: 50px;
    padding-bottom: 0;
`;