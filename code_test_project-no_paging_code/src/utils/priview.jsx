import React from 'react';
import styled from "styled-components";

const Priview = (props) => {
    const { open, close, title, content, type, useMail} = props;

    return (
      <PriviewStyle>
        <div className={open ? "openPriview priview" : "priview"}>
          {open && (
            <section>
                <header>
                    미리보기
                </header>
                <main>
                    <h2>{title ? title : "제목 없음"}</h2>
                    {content ? 
                    <div dangerouslySetInnerHTML={{ __html: content }} />
                    :
                    "본문 없음"
                    }
                </main>
                <footer>
                    <div className='info'>
                        <div>메일 유형 : {type ? type : "선택 안함"}</div>
                        <div>메일 사용 여부 : {useMail === "Y" ? "사용" : "미사용"}</div>
                    </div>
                    
                    <Button onClick={close}>확인</Button>
                </footer>
            </section>
          )}
        </div>
      </PriviewStyle>
    );
  };
  export default Priview;
  
  const PriviewStyle = styled.div`
    .priview {
      display: none;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      z-index: 99;
      background-color: rgba(0, 0, 0, 0.6);
    }
  
    .openPriview {
      display: flex;
      align-items: center;
      animation: priview-bg-show 0.8s;
    }
  
    section {
      width: 800px;
      
      margin: 0 auto;
      border-radius: 0.3rem;
      background-color: #fff;
      animation: priview-show 0.3s;
      overflow: hidden;
      header {
        position: relative;
        padding: 16px 64px 16px 16px;
        background-color: #2E3E76;
        color: white;
        font-weight: 700;
        button {
          position: absolute;
          top: 15px;
          right: 15px;
          width: 30px;
          font-size: 21px;
          font-weight: 700;
          text-align: center;
          color: #999;
          background-color: transparent;
        }
      }
      main {
        border: 1px solid #ccc;
        border-radius: 5px;
        height: 60vh;
        padding: 5px 25px;
        margin: 15px;
        margin-bottom: 0;
      }
      footer {
        padding: 12px 16px;
        padding-right: 6px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        .info{
            font-size: 12px;
            display: flex;
            flex-direction: row;
            div + div{
                margin-left: 15px;
            }
        }
        button {
          padding: 6px 12px;
          color: #fff;
          background-color: #6c757d;
          border-radius: 5px;
          font-size: 13px;
        }
      }
    }
  
    @keyframes priview-show {
      from {
        opacity: 0;
        margin-top: -50px;
      }
      to {
        opacity: 1;
        margin-top: 0;
      }
    }
    @keyframes priview-bg-show {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `;
  
  const Button = styled.button`
    outline: none;
    cursor: pointer;
    margin-right: 10px;
    border: 0;
    width: 60px;
  `;