import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { DataContext } from '../../utils/contextApi';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import MockApi from '../../utils/mockApi';
import Modal from '../../utils/modal';
import Priview from '../../utils/priview';

const mockApi = new MockApi();

const Main = () => {

    const context = useContext(DataContext);
    const {settingClose, clickedData, setSettingClose, setClickedData, clickAdd, setUpdateData, change, setChange} = context;

    
    const [mailContent, setMailContent] = useState("");
    const [id, setId] = useState("");
    const [title, setTitle] = useState(""); 
    const [reason, setReason] = useState(""); 
    const [mailType, setMailType] = useState("");
    const [mailUse, setMailUse] = useState("");
    const [content, setContent] = useState("");
    const [parsedContent, setParsedContent] = useState("");

    const [addModalOpen, setAddModalOpen] = useState(false);
    const [updateModalOpen, setUpdateModalOpen] = useState(false);
    const [finAddModalOpen, setFinAddModalOpen] = useState(false);
    const [finUpdateModalOpen, setFinUpdateModalOpen] = useState(false);
    const [closeSettingModalOpen, setCloseSettingModalOpen] = useState(false);

    const [priviewOpen, setPriviewOpen] = useState(false);



    useEffect(()=>{
        setId(clickedData.mailUid);
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
        setSettingClose(!settingClose);
        setClickedData({});
        setCloseSettingModalOpen(false);
    }

    const onClickSettingCloseModal = () => {
        setCloseSettingModalOpen(true);
    }

    const onClickSave = async() => {

        if(clickAdd){
            try{
                const rsp = await mockApi.post({
                    mailType: mailType,
                    mailTitle: title,
                    ismailIUse: mailUse,
                    mailContent: parsedContent,
                    reason: reason
                });
                setAddModalOpen(false);
                setUpdateData(rsp.data.article);
                setFinAddModalOpen(true);
                setChange(!change);
            } catch (error) {
                console.error(error);
            }
            
            
        }
        else{
            try{
                const rsp = await mockApi.put({
                    mailUid: id,
                    mailType: mailType,
                    mailTitle: title,
                    ismailIUse: mailUse,
                    mailContent: parsedContent,
                    reason: reason
                });
                setUpdateModalOpen(false);
                setUpdateData(rsp.data.article);
                setFinUpdateModalOpen(true);
                setChange(!change);
            } catch (error) {
                console.error(error);
            }
            
        }
        
    }

    const ModalOpen = () => {

        if(clickAdd){
            setAddModalOpen(true);
        }
        else{
            setUpdateModalOpen(true);
        }
        
    }

    const closeModal = () => {

        if(addModalOpen){
            setAddModalOpen(false);
        }
        else{
            setUpdateModalOpen(false);
        }

    }

    const closeFinModal = () => {

        if(finAddModalOpen){
            setSettingClose(false);
            setClickedData({});
            setFinAddModalOpen(false);
        }
        else{
            setSettingClose(false);
            setClickedData({});
            setFinUpdateModalOpen(false);
        }

    }

    const closeSettingModal = () => {
        setCloseSettingModalOpen(false);
    }

    const onClickPriview = () => {
        setPriviewOpen(true);
    }

    const closePriview = () => {
        setPriviewOpen(false);
    }

    
    return (
        <div style={{display: settingClose ? "none" : "block"}}>
        <MainStyle>
            <table>
                <tr>
                    <th>메일유형</th>
                    <td className='td'>
                        <select name="" id="" value={mailType ? mailType : ""} onChange={onChangeType}>
                            <option value="" disabled hidden>유형 선택</option>
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
                    <td colspan="3"><input className='input' type="text" value={title ? title : ""} onChange={onChangeTitle}/></td>
                </tr>
                <tr>
                    <th>메일 내용</th>
                    <td colspan="3">
                        <Container>
                            <CKEditor
                                editor={ ClassicEditor }
                                data={mailContent ? mailContent : ""}
                                
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
                    <td colspan="3"><input className='input' type="text" value={reason ? reason : ""} onChange={onChangeReason} placeholder='argument 변경시 에러가 발생하오니 주의하시기 바랍니다.'/></td>
                </tr>
                
            </table>
            <Preview onClick={onClickPriview}>
                <button><FontAwesomeIcon icon={faNoteSticky} /> 미리보기</button>
            </Preview>
            <BtnArea>
                <button className='close' onClick={onClickSettingCloseModal}>창닫기</button>
                <button className={title && content && mailType && mailUse && reason ? "" : "disable"} onClick={ModalOpen}>저장</button>
            </BtnArea>
        </MainStyle>
        <Modal open={addModalOpen} close={closeModal} header="등록" type={true} confirm={onClickSave}>등록 하시겠습니까?</Modal>
        <Modal open={updateModalOpen} close={closeModal} header="수정" type={true} confirm={onClickSave}>수정 하시겠습니까?</Modal>
        <Modal open={finAddModalOpen} close={closeFinModal} header="완료" fin={true}>등록이 완료되었습니다.</Modal>
        <Modal open={finUpdateModalOpen} close={closeFinModal} header="완료" fin={true}>수정이 완료되었습니다.</Modal>
        <Modal open={closeSettingModalOpen} close={closeSettingModal} header="닫기" type={true} confirm={onClickSettingClose}>닫으시겠습니까?</Modal>
        <Priview open={priviewOpen} close={closePriview} title={title} content={content} type={mailType} useMail={mailUse}></Priview>
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
    .disable{
        background-color: #6b6b6b;
        pointer-events: none;
    }
`;
