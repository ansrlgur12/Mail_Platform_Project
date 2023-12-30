import React, { useContext } from 'react';
import { MinBtn, TopStyle } from '../List/Top';
import { DataContext } from '../../utils/contextApi';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Top = () => {

    const context = useContext(DataContext);
    const {searchClose, setSearchClose} = context;

    const onClickMinBtn = () => {
        setSearchClose(!searchClose);
    }
    return (
        <TopStyle>
            <div>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{marginRight: "5px"}}/>검색
            </div>
            <MinBtn onClick={onClickMinBtn}>-</MinBtn>
        </TopStyle>
    );
};

export default Top;