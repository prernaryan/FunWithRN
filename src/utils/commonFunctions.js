import {Routes} from '@constants';

export const currentDate = new Date();
export const minimumDate = new Date(
  currentDate.getFullYear() - 18,
  currentDate.getMonth(),
  currentDate.getDate(),
);

export const getMinAndMaxDateForDob = () => {
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Add 1 to get the current month (January is 0)
  const currentDay = currentDate.getDate();

  // Zero-pad the month and day if they are less than 10
  const zeroPaddedMonth = currentMonth < 10 ? `0${currentMonth}` : currentMonth;
  const zeroPaddedDay = currentDay < 10 ? `0${currentDay}` : currentDay;

  const minDate = `${currentYear}-${zeroPaddedMonth}-${zeroPaddedDay}`;
  const maxDate = `${currentYear + 100}-${zeroPaddedMonth}-${zeroPaddedDay}`;

  return {minDate, maxDate};
};

export const dobFormat = date => {
  if (date) {
    const parts = date.split('/');
    const day = parts[0];
    const month = parts[1];
    const year = parts[2];
    return `${year}-${month}-${day}`;
  } else {
    return 'NA';
  }
};
export const calculateBMI = (heightFt, weight) => {
  // Convert height from feet to meters
  const heightInMeters = (parseFloat(heightFt) * 0.3048).toFixed(2);

  // Calculate BMI
  const weightInKg = parseFloat(weight);
  const bmi = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
  return bmi;
  // Display BMI result
};
export const getTabName = label => {
  switch (label) {
    case Routes.YoutubeHomeStacks:
      return 'Home';
    case Routes.YoutubeShorts:
      return 'Shorts';
    case Routes.YoutubeMore:
      return '';
    case Routes.YoutubeSubscription:
      return 'Subscription';
    case Routes.YoutubeLibrary:
      return 'Library';
    default:
      break;
  }
};
