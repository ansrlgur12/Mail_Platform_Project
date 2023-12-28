import React from 'react';
import { MinBtn, TopStyle } from '../List/Top';

const Top = () => {
    return (
        <TopStyle>
            컨텐츠 설정
            <MinBtn onClick={()=>console.log("클릭!")}>-</ MinBtn>
        </TopStyle>
    );
};

export default Top;

// const TopStyle = styled.div`
//     height: 30px;
//     background-color: #2E3E76;
// `;