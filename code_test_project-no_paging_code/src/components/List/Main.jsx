import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import MockApi from '../../utils/mockApi';
import { formatDate } from '../../utils/formatDate';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faAnglesLeft, faAnglesRight, faDownload } from "@fortawesome/free-solid-svg-icons";
import { DataContext } from '../../utils/contextApi';

const mockApi = new MockApi();

const Main = () => {

    const context = useContext(DataContext);
    const {setClicked, setClickedData, setSettingClose, listClose, clickAdd, setClickAdd, updateData} = context;

    const [jsonData, setJsonData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageItems, setPageItems] = useState(10);
    const [selectAll, setSelectAll] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        fetchData();
    }, [currentPage, pageItems, updateData]);

    const fetchData = async () => {
        try {
            const response = await mockApi.get();
            setJsonData(response.data.articles);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const onClickPage = (e) => {
        setCurrentPage(e);
      };

    const onChangePageNumber = (e) => {
        setCurrentPage(1);
        setPageItems(Number(e.target.value))
    }

    const onSelectAll = () => { // 전체 선택
        setSelectAll(!selectAll);
        setSelectedItems([]); 
    };
     
    const onChangeCheckbox = (item) => { // 개별 선택
      const index = selectedItems.findIndex((selectedItem) => selectedItem === item.mailUid);
      if (index === -1) {
        setSelectedItems([...selectedItems, item.mailUid]);
      } else {
        const updatedItems = [...selectedItems];
        updatedItems.splice(index, 1);
        setSelectedItems(updatedItems);
      }
      setSelectAll(false);
    };
    
    const onClickData = (e) => {
        setClickedData(jsonData[e - 1]);
        setClicked(false);
        setClickAdd(false);
        setSettingClose(true);
    }

    const onClickAdd = () => {
        setClickedData({});
        setClicked(false);
        setClickAdd(true);
        setSettingClose(true);
    }

    const onClickDel = async() => {
        try{
            const rsp = await mockApi.delete({mailUidList:selectedItems});
            console.log(rsp);
        } catch (error) {
            console.error(error);
        }

    }
      

    const items = () => {
        const startIndex = (currentPage - 1) * pageItems;
        const endIndex = startIndex + pageItems;
        return jsonData.slice(startIndex, endIndex).map((item) => (
          <tr key={item.mailUid} 
          style={{ backgroundColor: selectAll || selectedItems.includes(item.mailUid) ? 'rgba(255, 235, 58, 0.2)' : '' }}
          >
            <td><input type="checkbox" checked={selectAll || selectedItems.includes(item.mailUid)} onChange={() => onChangeCheckbox(item)}/></td>
            <td>{item.mailUid}</td>
            <td>{item.mailType}</td>
            <td className="title" onClick={()=>onClickData(item.mailUid)}>{item.mailTitle}</td>
            <td>{item.ismailIUse}</td>
            <td>{formatDate(item.modificationDate)}</td>
          </tr>
        ));
    };

    const totalPages = Math.ceil(jsonData.length / pageItems);

    return (
        <div style={{display: listClose ? "none" : "block"}}>
        <MainStyle>
            <Desc>
                <div className='left'>
                    <ColorBox>현재등록 : {jsonData.length}</ColorBox>
                    <div>등록된 전체 메일 유형입니다.</div>
                </div>
                <div>
                    <NormalBtn onClick={onClickAdd}>등록</NormalBtn>
                    <NormalBtn onClick={onClickDel}>삭제</NormalBtn>
                </div>
            </Desc>
            <TableStyle>
                <colgroup>
                    <col style={{width: '50px'}}/>
                    <col style={{ width: '40px'}} />
                    <col style={{ width: '180px'}} />
                    <col style={{ width: '590px'}} />
                    <col style={{ width: '110px'}} />
                    <col style={{ width: '160px'}} />
                </colgroup>
                <thead>
                    <tr>
                        <th><input type="checkBox" checked={selectAll} onChange={onSelectAll} /></th>
                        <th><div className='th'>NO</div></th>
                        <th><div className='th'>메일 유형</div></th>
                        <th><div className='th'>메일 발송 제목</div></th>
                        <th><div className='th'>메일 사용 여부</div></th>
                        <th><div className='th'>수정일</div></th>
                    </tr>
                </thead>
                <tbody>{items()}</tbody>
            </TableStyle>
        </MainStyle>

        <Bottom>
            <div className='excel'>
                <FontAwesomeIcon icon={faDownload} style={{marginRight: '5px'}}/>
                엑셀저장
            </div>
            <div>
                <button disabled={currentPage === 1} onClick={() => onClickPage(1)}>
                    <FontAwesomeIcon icon={faAnglesLeft} />
                </button>
                <button disabled={currentPage === 1} onClick={() => onClickPage(currentPage - 1)}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <span>페이지 {currentPage} / {totalPages}</span>
                <button disabled={currentPage === totalPages} onClick={() => onClickPage(currentPage + 1)}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
                <button disabled={currentPage === totalPages} onClick={() => onClickPage(totalPages)}>
                    <FontAwesomeIcon icon={faAnglesRight} />
                </button>
                <select name="" id="" onChange={onChangePageNumber} defaultValue={pageItems}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value={jsonData.length}>전체</option>
                </select>
            </div>
            <div className='bot-right'>
                보기 {pageItems*currentPage-(pageItems-1)}-{currentPage === totalPages ? jsonData.length : pageItems*currentPage} / {jsonData.length}
            </div>
        </Bottom>
        </div>
    );
};

export default Main;

const MainStyle = styled.div`
    position: relative;
    background-color: #FFFFFF;
    font-size: 12px;
    height: 320px;
    
    overflow-y: scroll;
`

const NormalBtn = styled.button`
        font-size: 12px;
        font-weight: 500;
        width: 60px;
        height: 26px;
        border: 1px solid #B3B6C7;
        background-color: #FFFFFF;
        border-radius: 5px;
        + button{
            margin-left: 7px;
        }
`

const Desc = styled.div`
    height: 40px;
    padding: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .left{
        display: flex;
        flex-direction: row;
        div + div {
            margin-left: 10px;
        }
    }
`;

const ColorBox = styled.div`
    font-size: 10px;
    font-weight: 700;
    color: #698CC2;
    padding: 0 5px;
    width: 69px;
    height: 18px;
    background-color: #DDEBFF;
    
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const TableStyle = styled.table`
    
    border-collapse:collapse;
    width: 100%;
    font-size: 12px;

    th, td{
        height: 30px;
    }
    
    thead{
        border-top: 1px solid #2E3E76;
        border-bottom: 1px solid #2E3E76;

        .th{
        height: 12px;
        border-left: 1px solid #2E3E76;
        line-height: 1;
        }

    }

    tbody{
        td{
            text-align: center;
            border-bottom: 1px solid #CDD0E5;
            
        }
        .title{
            text-align: start;
            padding-left: 10px;
            cursor: pointer;
        }
    }

    
`;

const Bottom = styled.div`
    font-size: 12px;
    position: static;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    background-color: #D9DAE2;
    

    button {
        margin: 0 5px;
        cursor: pointer;
        font-size: 12px;
        border: none;
        background-color: #D9DAE2;
        border-radius: 5px;
        padding: 5px 10px;
    }

    select{
        width: 50px;
        height: 20px;
        border: none;
    }

    .excel{
        cursor: pointer;
    }

    .bot-right{
        display: flex;
        flex-direction: row-reverse;
    }
`;