import { formatDate } from "./formatDate";

export const column = [
        {
          Header: "NO",
          accessor: "mailUid",
          width: 50
        },
        {
          Header: "메일 유형",
          accessor: "mailType",
          width: 180
        },
        {
          Header: "메일 발송 제목",
          accessor: "mailTitle",
          width: 600,
          Cell: ({ value }) => (
            <div style={{ textAlign: "left", paddingLeft: "10px", cursor: "pointer" }} >
              {value}
            </div>
          ),
        },
        {
          Header: "메일 사용여부",
          accessor: "ismailIUse",
          width: 110
        },
        {
          Header: "수정일",
          accessor: "modificationDate",
          width: 170,
          Cell: ({value}) => (
            <div>{formatDate(value)}</div>
          ),
        }
      ];
      