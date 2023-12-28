## 문제
```
당신은 고객사의 요청으로 이메일 템플릿 페이지를 추가하기로 결정하였습니다.
아래의 피그마 디자인을 참고하여 이메일 템플릿 페이지를 완성해주세요.
이 페이지는 조회, 등록, 수정, 삭제 등의 기능을 제공해야 합니다.
```
## 메일템플릿 디자인 페이지 
- https://www.figma.com/file/b3Nnix8GO4sDmWvpJYLna9/%40-%EC%9E%85%EC%82%AC%ED%85%8C%EC%8A%A4%ED%8A%B8%EC%9A%A9?node-id=0%3A1&mode=dev

### 작업 방식
    - 라이브러리 사용 유무는 자유.
    - 스타일 지정 역시 css, scss, styled-components 등등 무엇을 사용하든 자유.
    - db.json 외 소스 수정 자유.
    - 디자인 수정도 자유

### 확인 사항
    1. UI 및 화면 동작
    2. 페이징 구현
    3. 미리보기 기능
    4. 메일템플릿 적용 및 동작 여부

### 추가 점수
    1. 테이블 컬럼 Resizing 여부
    2. 검색 화면 및 검색 기능 구현
    3. 엑셀 저장(다운로드) 기능 여부
    4. 그 외 자유로이 필요하다고 생각되는 기능 구현
  

## MockApi
#### Method

- post

```
생성 api
- 매개변수의 값을 통한 새로운 대시보드 정보 생성
- param 
    mailType [Type] String
    mailTitle [Type] String
    ismailIUse [Type] String
    mailContent [Type] String
    reason [Type] String
- return
    {
        data: [Type] BoardDtoList,
        status [Type] Number
    }
```

- get

```
검색 api
- 검색 및 페이지 정보를 통한 페이지 정보 및 대시보드 정보 출력
- param 
    mailType [Type] String
    mailTitle [Type] String
    ismailIUse [Type] String
    limit [Type] Number
    currentPage [Type] Number
- return 
    {
        data: {
            articles:[Type] BoardDtoList,
            page:[Type] PageDtoList,
               },
        status [Type] Number
    }
```

- delete

```
삭제 api
- mailUid를 통해 데이터 검색 후 해당 데이터 삭제
- param 
    mailUidList [Type] Number || Array
- return 
    {
        data: [Type] BoardDtoList,
        status [Type] Number
    }
```

- put

```
업데이트 api
- mailUid를 통해 데이터 검색 후 해당 데이터 수정
- param 
    mailUid [Type] Number
    mailType [Type] String
    mailTitle [Type] String
    ismailIUse [Type] String
    mailContent [Type] String
    reason [Type] String
- return 
    {
        data: [Type] BoardDtoList,
        status [Type] Number
    }
```

**문제와 디자인에 대한 저작권은 코드와이즈에 있습니다.**<br/>
**유출하실 경우 채용과정에서 불이익이 있을 수 있습니다.**<br/>
**부정행위를 방지하기 위해 외부에 문제나 풀이를 올리지 말아주세요.**<br/>

