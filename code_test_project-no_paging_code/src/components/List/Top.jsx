import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";

const Top = () => {
    return (
        <TopStyle>
            <div>
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff", marginRight: "5px"}} />
            컨텐츠 목록
            </div>
            
            <MinBtn onClick={()=>console.log("클릭!")}>-</ MinBtn>
        </TopStyle>
    );
};

export default Top;

export const TopStyle = styled.div`
    font-size: 12px;
    color: #FFFFFF;
    height: 30px;
    padding: 0 10px;
    background-color: #2E3E76;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const MinBtn = styled.div`
    height: 14px;
    width: 14px;
    background-color: #FFFFFF;
    color: #000;
    font-size: 30px;
    line-height: 0.2;
    text-align: center;
    cursor: pointer;
`