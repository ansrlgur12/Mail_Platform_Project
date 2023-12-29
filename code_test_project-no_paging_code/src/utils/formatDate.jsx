const fix = (value) => {
  return String(value).padStart(2, '0');
};

export const formatDate = (dateString) => {
  
  const [datePart, timePart] = dateString.split('T');
  const [year, month, day] = datePart.split('-');
  const [hours, minutes] = timePart.replace('Z', '').split(':');
  
  const fixMonth = fix(month);
  const fixDay = fix(day);
  const fixHour = fix(hours);
  const fixMin = fix(minutes);

  const formattedDate = `${year}-${fixMonth}-${fixDay} ${fixHour}:${fixMin}`;

  return formattedDate;
};
