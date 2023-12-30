import React from 'react';
import styled from 'styled-components';
import Top from './Top';
import Main from './Main';

const Setting = () => {


    return (
        <SettingStyle>
            <Top />
            <Main />
        </SettingStyle>
    );
};

export default Setting;

const SettingStyle = styled.div`
    width: 1145px;
    height: auto;
    padding-bottom: 50px;
`;