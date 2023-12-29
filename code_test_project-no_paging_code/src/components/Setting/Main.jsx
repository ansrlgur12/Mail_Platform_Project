import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../utils/contextApi';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";

const Main = () => {

    const context = useContext(DataContext);
    const {clicked, clickedData, setSettingClose, setClicked, setClickedData} = context;

    
    const [mailContent, setMailContent] = useState("");
    const [title, setTitle] = useState(""); 
    const [reason, setReason] = useState(""); 
    const [mailType, setMailType] = useState("");
    const [mailUse, setMailUse] = useState("");
    const [content, setContent] = useState("");
    const [parsedContent, setParsedContent] = useState("");


    useEffect(()=>{
        
        setMailContent(clickedData.mailContent);
        setTitle(clickedData.mailTitle);
        setReason(clickedData.reason);
        setMailType(clickedData.mailType);
        setMailUse(clickedData.ismailIUse);
    },[clickedData])

    const onChangeTitle = (e) => {
        setTitle(e.target.value);
    }
    
    const onChangeReason = (e) => {
        setReason(e.target.value);
    }

    const onChangeType = (e) => {
        setMailType(e.target.value);
    }

    const onChangeMailUse = (e) => {
        setMailUse(e.target.value);
    }

    const parseHTML = (htmlString) => {
        const parser = new DOMParser();
        const parsedDocument = parser.parseFromString(htmlString, 'text/html');
        return parsedDocument.body.textContent || "";
    };

    const onClickSettingClose = () => {
        setSettingClose(false);
        setClicked(false);
        setClickedData({});
    }

    
    return (
        <div style={{display: clicked ? "none" : "block"}}>
        <MainStyle>
            <table>
                <tr>
                    <th>메일유형</th>
                    <td className='td'>
                        <select name="" id="" value={mailType} onChange={onChangeType}>
                            <option value="Notification">Notification</option>
                            <option value="Marketing">Marketing</option>
                        </select>
                        </td>
                    <th>메일 사용 여부</th>
                    <td>
                        <label><input className='radio' type="radio" value="Y" name="status" checked={mailUse === "Y"} onChange={onChangeMailUse} />사용</label>
                        <label><input className='radio' type="radio" value="N" name="status" checked={mailUse === "N"} onChange={onChangeMailUse} />미사용</label>
                    </td>
                </tr>
                <tr>
                    <th>메일 발송제목</th>
                    <td colspan="3"><input className='input' type="text" value={title} onChange={onChangeTitle}/></td>
                </tr>
                <tr>
                    <th>메일 내용</th>
                    <td colspan="3">
                        <Container>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={mailContent}
                                
                                onChange={ ( event, editor ) => {
                                    const editorContent = editor.getData();
                                    const editorParsedContent = parseHTML(editorContent);
                                    setContent(editorContent);
                                    setParsedContent(editorParsedContent);
                                    
                                } }
                            />
                        </Container>
                    </td>
                </tr>
                <tr>
                    <th>변경 사유</th>
                    <td colspan="3"><input className='input' type="text" onChange={onChangeReason} placeholder='argument 변경시 에러가 발생하오니 주의하시기 바랍니다.'/></td>
                </tr>
                
            </table>
            <Preview>
                <button><FontAwesomeIcon icon={faNoteSticky} /> 미리보기</button>
            </Preview>
            <BtnArea>
                <button className='close' onClick={onClickSettingClose}>창닫기</button>
                <button>저장</button>
            </BtnArea>
        </MainStyle>
        </div>
    );
    
};

export default Main;

const MainStyle = styled.div`
    padding: 25px;
    width: 1095px;
    background-color: #FFFFFF;
    font-size: 12px;
   

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
            background-color: #F2F4F7;
        }

        
    }
    .td{
        width: 610px;
    }
    
    .radio{
        margin-right: 5px;
    }
    select{
    margin-left: 5px;
    height: 25px;
    border: none;
    }
    tfoot{
        tr{
            background-color: #F2F4F7;
        }
    }
`
const Container = styled.div`
    width: 100%;
    
    .ck-editor__editable {
      
      height: 400px;
    }
`;

const Preview = styled.div`
    height: 40px;
    background-color: #F2F4F7;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

    button{
        margin: 1px;
        border: 1px solid #B3B6C7;
        border-radius: 5px;
        width: 100px;
        height: 26px;
        background-color: #FFFFFF;
    }
`;

const BtnArea = styled.div`
    height: 75px;
    padding-top: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    button{
        width: 130px;
        height: 34px;
        + button{
            margin-left: 10px;
        }
        border: none;
        background-color: #191919;
        color: #FFFFFF;
    }
    .close{
        border: 1px solid #B3B6C7;
        background-color: #FFFFFF;
        color: #191919;
    }
`;
