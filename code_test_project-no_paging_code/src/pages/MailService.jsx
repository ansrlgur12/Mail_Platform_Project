import React from 'react';
import List from '../components/List/List';
import styled from 'styled-components';
import Setting from '../components/Setting/Setting';

const MailService = () => {
    return (
        <MainPageStyle>
            <List />
            <Setting />
        </MainPageStyle>
    );
};

export default MailService;

const MainPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #EDEEF3;
`;