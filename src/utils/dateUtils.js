export const formatDate = dateString => {
  if (!dateString) {
    return '';
  }

  const parts = dateString.split('-');
  if (parts.length !== 3) {
    return dateString;
  }

  const [year, month, day] = parts;
  return `${day}/${month}/${year}`;
};

export const apiDateFormat = dateString => {
  // Create a Date object from the input string
  const inputDate = new Date(dateString);

  // Extract the day, month, and year from the Date object
  const day = String(inputDate.getDate()).padStart(2, '0');
  const month = String(inputDate.getMonth() + 1).padStart(2, '0');
  const year = inputDate.getFullYear();

  // Create the formatted date string in the "dd/mm/yyyy" format
  const formattedDate = `${day}/${month}/${year}`;
  return formattedDate;
};

export const formatDateForApi = inputDate => {
  const [day, month, year] = inputDate.split('/');
  const formattedDate = new Date(`${year}-${month}-${day}`);
  const outputDate = formattedDate.toISOString().split('T')[0];
  return outputDate;
};
