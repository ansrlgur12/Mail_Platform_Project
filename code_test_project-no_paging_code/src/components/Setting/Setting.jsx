import React, { useContext } from 'react';
import styled from 'styled-components';
import Top from './Top';
import Main from './Main';
import { DataContext } from '../../utils/contextApi';

const Setting = () => {

    const context = useContext(DataContext);
    const {settingClose} = context;

    if(settingClose)
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