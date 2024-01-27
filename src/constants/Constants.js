export const Routes = {
  Login: 'Login',
  EntryScreen: 'EntryScreen',
  NetflixSplash: 'NetflixSplash',
  NetflixNav: 'NetflixNav',
  YoutubeSplash: 'YoutubeSplash',
  YouTubeNav: 'YouTubeNav',
  YoutubeHome: 'YoutubeHome',
  YoutubeShorts: 'YoutubeShorts',
  YoutubeLibrary: 'YoutubeLibrary',
  YoutubeMore: 'YoutubeMore',
  YoutubeSubscription: 'YoutubeSubscription',
  YoutubeTabs: 'YoutubeTabs',
};
export const Regx = {
  MOBILE_REGEX: /^(0)?[1-9]\d{7,14}$/,
  SPECIAL_CHAR: /[|#\\/~^:,;?!&%$@*+]/,
  ALPHA: /[a-zA-Z]/,
  ALPHA_START: /^[A-Z]/i,
  ALPHA_LOWER: /[a-z]/,
  ALPHA_CAP: /[A-Z]/,
  NUM: /[0-9]/,
  OTP: /[0-9]{6,}$/,
  FIRST_NAME: /^[a-zA-Z.]+( [A-Za-z]+)*$/,
  EMAILORPHONE: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,
  EMAIL: /[a-z0-9A-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/,
  DATE2: /^\d{2}\/\d{2}\/\d{4}$/,
};
export const DATE_MASK = [
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];
export const Fonts = {
  RobotoBlack: 'Roboto-Black',
  RobotoBlackItalic: 'Roboto-BlackItalic',
  RobotoBold: 'Roboto-Bold',
  RobotoBoldItalic: 'Roboto-BoldItalic',
  RobotoItalic: 'Roboto-Italic',
  RobotoLight: 'Roboto-Light',
  RobotoLightItalic: 'Roboto-LightItalic',
  RobotoMedium: 'Roboto-Medium',
  RobotoMediumItalic: 'Roboto-MediumItalic',
  RobotoRegular: 'Roboto-Regular',
  RobotoThin: 'Roboto-Thin',
  RobotoThinItalic: 'Roboto-ThinItalic',
};

export const validation = {
  emailInvalid: 'Please enter a valid email address.',
  emailRequired: 'Email is required',
  passwordRequired: 'Password is required',
  passwordRequiredConfirm: 'Please enter a confirm password.',
  PASSWORD_MIN: 'Your password must be at least 8 characters long',
  PASSWORD_INVALID: 'Please enter strong password.',
  invalid_phone: 'Please enter a valid phone number.',
  max_char: 'Maximum 30 characters.',
  first_name: 'First name is required.',
  INVALID_FIRST_NAME: 'Please enter a valid first name.',
  INVALID_LAST_NAME: 'Please enter a valid last name.',
  last_name: 'Last name is required.',
  only_alpha: 'Please enter alphabets only.',
  phone: 'Phone number is required.',
  invalid_date: 'Please enter a valid date of birth.',
  LOWER_CASE: 'Your password must contain at least 1 lower case character',
  ALPHA_NUM: 'Your password must start with an alphabet.',
  CAPSLOCK: 'Your password must contain at least 1 uppercase character.',
  NUM_PASS: 'Your password must contain at least 1 numeric character.',
  SPECIAL_CHAR: 'Your password must contain at least 1 special character.',
  CONFIRM_PASSWORD: 'Please re-enter your password to confirm',
  confirm_not_match: 'Your passwords do not match.',
  GENDER_REQUIRED: 'Gender is required.',
  WEIGHT_REQUIRED: 'Weight is required.',
  WEIGHT_MIN: 'Weight must be a positive number.',
  HEIGHT_REQUIRED: 'Height is required.',
  HEIGHT_MIN: 'Height must be a positive number.',
  DOB_REQUIRED: 'Date of birth is required.',
  INVALID_DATE: 'Please enter a valid date of birth.',
  ALPHA_NUM_VAL: 'ALPHA_NUM',
  SPECIAL: 'SPECIAL',
  CAPSLOCK_VAL: 'CAPSLOCK',
  NO_INTERNET_CONNECTION: 'Please Check Your Internet Connection',
};

export const HttpStatus = {
  UNAUTHORISED: 401,
  SUCCESS_REQUEST: 200,
  SUCCESS_CODE_202: 202,
  SUCCESS_CODE_201: 201,
  SUCCESS_CODE_204: 204,
  UNAUTHORISED_400: 400,
  SUCCESS_CODE_205: 205,
};
export const genderOptions = [
  {label: 'Male', value: '1'},
  {label: 'Female', value: '2'},
];

export const ageOptions = [
  {label: '18', value: '1'},
  {label: '19', value: '2'},
  {label: '20', value: '3'},
  {label: '21', value: '4'},
  {label: '22', value: '5'},
  {label: '23', value: '6'},
  {label: '24', value: '7'},
];

export const DiseaseData = [
  {id: 1, name: 'General'},
  {id: 2, name: 'Heart Disease'},
  {id: 3, name: 'Stroke'},
  {id: 4, name: 'Diabetes'},
  {id: 5, name: 'Obesity'},
  {id: 6, name: 'Arthritis'},
  {id: 7, name: 'Blood Pressure'},
  {id: 8, name: 'Kidney'},
];

export const diseaseOptions = [
  {label: 'General', value: '1'},
  {label: 'Heart Disease', value: '2'},
  {label: 'Stroke', value: '3'},
  {label: 'Diabetes', value: '4'},
  {label: 'Obesity', value: '5'},
  {label: 'Arthritis', value: '6'},
  {label: 'Blood Pressure', value: '7'},
  {label: 'Kidney', value: '8'},
];
