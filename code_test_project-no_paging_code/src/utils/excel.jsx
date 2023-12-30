import * as XLSX from 'xlsx';

const excel = (selectedItems, jsonData) => {
  const selectedData = jsonData.filter((item) => selectedItems.includes(item.mailUid));

  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(selectedData);

  const colWidths = selectedData.reduce((acc, row) => {
    Object.keys(row).forEach((key, index) => {
      acc[index] = Math.max(acc[index] || 0, String(row[key]).length);
    });
    return acc;
  }, []);

  
  worksheet['!cols'] = colWidths.map((width, index) => {
    if (index === 0 || index === 3) {
      return { width: width + 8 }; // mailUid와 ismailUse 항목의 너비 늘리기
    }
    return { width: width + 2 };
  });

  XLSX.utils.book_append_sheet(workbook, worksheet, '코드와이즈');
  XLSX.writeFile(workbook, '코드와이즈 코딩테스트 엑셀.xlsx');
};

export default excel;
