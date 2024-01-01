import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { NormalBtn } from '../List/Main';
import { DataContext } from '../../utils/contextApi';

const Main = () => {

    const context = useContext(DataContext);
    const { setSearchValue, searchClose } = context;

    const [inputValue, setInputValue] = useState('');
    const [searchType, setSearchType] = useState('type');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSearch = () => {

        if(inputValue.length === 0) {
            setSearchValue([]);
        }

        else{
            setSearchValue({
                value: inputValue,
                type: searchType,
            });

        }

       
    };

    const handleReset = () => {
        setSearchValue("");
        setInputValue("");
    };

    const handleSelectChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div style={{display: searchClose ? "none" : "block"}}>
            <MainStyle>
                <select name="" id="" onChange={handleSelectChange} value={searchType}>
                    <option value="type">유형</option>
                    <option value="title">제목</option>
                    <option value="use">메일 사용여부</option>
                </select>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                />
                <div>
                    <NormalBtn onClick={handleSearch}>검색</NormalBtn>
                    <NormalBtn onClick={handleReset}>초기화</NormalBtn>
                </div>
            </MainStyle>
        </div>
    );
};

export default Main;

const MainStyle = styled.div`
    background-color: white;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;

    input{
        width: 75%;
        height: 28px;
            border-radius: 5px;
            border: 1px solid #CDD0E5;
            background-color: #F2F4F7;
        
    }

    select{
        font-size: 12px;
        font-weight: 500;
        width: 100px;
        height: 26px;
        border: 1px solid #B3B6C7;
        background-color: #FFFFFF;
        border-radius: 5px;
    }
`;