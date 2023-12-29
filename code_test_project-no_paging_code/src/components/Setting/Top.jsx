import React, { useContext } from 'react';
import { MinBtn, TopStyle } from '../List/Top';
import { DataContext } from '../../utils/contextApi';



const Top = () => {

    const context = useContext(DataContext);
    const {clicked, setClicked, clickAdd} = context;

    const onClickMinBtn = () => {
        setClicked(!clicked);
    }

    return (
        <TopStyle>
            {clickAdd ? "컨텐츠 등록" : "컨텐츠 설정"}
            <MinBtn onClick={onClickMinBtn}>-</ MinBtn>
        </TopStyle>
    );
};

export default Top;