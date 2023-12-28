import React from 'react';
import styled from 'styled-components';

const Top = () => {
    return (
        <TopStyle>
            컨텐츠 설정
        </TopStyle>
    );
};

export default Top;

const TopStyle = styled.div`
    height: 30px;
    background-color: #2E3E76;
`;