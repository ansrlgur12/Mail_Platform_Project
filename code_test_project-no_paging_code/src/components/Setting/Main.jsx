import React from 'react';
import styled from 'styled-components';

const Main = () => {
    return (
        <MainStyle>
            <table>
                <tr>
                    <th>메일유형</th>
                    <td className='td'>내용</td>
                    <th>메일 사용 여부</th>
                    <td>
                        <label><input className='radio' type="radio" value="used" name="status" />사용</label>
                        <label><input className='radio' type="radio" value="unused" name="status" />미사용</label>
                    </td>
                </tr>
                <tr>
                    <th>메일 발송제목</th>
                    <td colspan="3"><input className='input' type="text" /></td>
                </tr>
                <tr>
                    <th>메일 내용</th>
                    <td colspan="3"></td>
                </tr>
                <tr>
                    <th>변경 사유</th>
                    <td colspan="3"><input className='input' type="text" /></td>
                </tr>

            </table>
        </MainStyle>
    );
};

export default Main;

const MainStyle = styled.div`
    padding: 25px;
    width: 1095px;
    background-color: #FFFFFF;
   

    table{
      border-collapse:collapse;
      width: 1095px;
    }
    th, td{
      border:1px solid #CDD0E5;
      font-size: 12px;
    }
    th{
        width: 120px;
        height: 40px;
        background-color: #818DA5;
        color: #FFFFFF;
    }
    td{
        height: 40px;
        
        .input{
            width: 965px;
            height: 28px;
            border-radius: 5px;
            border: 1px solid #CDD0E5;
        }

        
    }
    .td{
        width: 610px;
    }
    
    .radio{
        margin-right: 5px;
    }

    input[type='radio'] {
    -webkit-appearance: none; 
    -moz-appearance: none; 
    appearance: none; 
    width: 12px;
    height: 12px;
    border: 1px solid #CDD0E5;
    border-radius: 50%;
    margin-right: 5px;
    outline: none;
    cursor: pointer;
    }

    input[type='radio']:checked {
    background-color: #D84F6C;
    border: 1px solid white; 
    box-shadow: 0 0 0 1px #CDD0E5; 
    
    }
`