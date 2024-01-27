import * as yup from 'yup';
import {Regx, validation} from './Constants';
import {Value} from './FixedValues';
import moment from 'moment';

export const loginSchemaWithEmail = yup.object().shape({
  email: yup
    .string()
    .required(validation.emailRequired)
    .email(validation.emailInvalid)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: validation.emailInvalid,
    }),
  password: yup
    .string()
    .required(validation.passwordRequired)
    .min(Value.CONSTANT_VALUE_8, validation.PASSWORD_MIN)
    .matches(Regx.SPECIAL_CHAR, {
      excludeEmptyString: true,
      message: validation.SPECIAL_CHAR,
    })
    .matches(Regx.ALPHA_CAP, {
      excludeEmptyString: true,
      message: validation.CAPSLOCK,
    })
    .matches(Regx.NUM, {
      excludeEmptyString: true,
      message: validation.NUM_PASS,
    })
    .matches(Regx.ALPHA_LOWER, {
      excludeEmptyString: true,
      message: validation.LOWER_CASE,
    }),
});
export const loginSchemaWithMobile = yup.object().shape({
  mobileNumber: yup
    .string()
    .required('Mobile Number is required')
    .matches(Regx.MOBILE_REGEX, 'Invalid Mobile Number')
    .min(8, 'Mobile Number must be at least 8 digits long.')
    .max(15, 'Mobile Number should not exceed 15 digits in length.'),
  password: yup
    .string()
    .required(validation.passwordRequired)
    .min(Value.CONSTANT_VALUE_8, validation.PASSWORD_MIN)
    .matches(Regx.SPECIAL_CHAR, {
      excludeEmptyString: true,
      message: validation.SPECIAL_CHAR,
    })
    .matches(Regx.ALPHA_CAP, {
      excludeEmptyString: true,
      message: validation.CAPSLOCK,
    })
    .matches(Regx.NUM, {
      excludeEmptyString: true,
      message: validation.NUM_PASS,
    })
    .matches(Regx.ALPHA_LOWER, {
      excludeEmptyString: true,
      message: validation.LOWER_CASE,
    }),
});

export const signupSchema = yup.object().shape({
  firstName: yup
    .string()
    .required(validation.first_name)
    .transform(value => (value ? value.trim() : value))
    .max(30, validation.max_char)
    .matches(Regx.FIRST_NAME, {
      excludeEmptyString: true,
      message: validation.INVALID_FIRST_NAME,
    }),
  lastName: yup
    .string()
    .required(validation.last_name)
    .transform(value => (value ? value.trim() : value))
    .max(30, validation.max_char)
    .matches(Regx.FIRST_NAME, {
      excludeEmptyString: true,
      message: validation.INVALID_LAST_NAME,
    }),
  email: yup
    .string()
    .required(validation.emailRequired)
    .email(validation.emailInvalid)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: validation.emailInvalid,
    }),
  gender: yup
    .mixed()
    .test('is-object', validation.GENDER_REQUIRED, function (value) {
      // Ensure that the value is an object
      return typeof value === 'object' && value !== null;
    }),
  weight: yup.string().required(validation.WEIGHT_REQUIRED).matches(Regx.NUM, {
    excludeEmptyString: true,
    message: validation.NUM_PASS,
  }),
  height: yup.string().required(validation.HEIGHT_REQUIRED).matches(Regx.NUM, {
    excludeEmptyString: true,
    message: validation.NUM_PASS,
  }),
  dob: yup
    .string()
    .required(validation.DOB_REQUIRED)
    .matches(Regx.DATE2, 'Invalid Date')
    .test(
      'valid_date',
      'Date of birth should be more than 18 years old.',
      function (value) {
        console.log(value, 'valuedob');
        const minAge = 18;
        const currentDate = moment();
        const enteredDate = moment(value, 'DD/MM/YYYY', true);
        console.log(enteredDate, 'enteredDate');
        console.log(enteredDate);
        if (!enteredDate.isValid()) {
          return false;
        }
        const age = currentDate.diff(enteredDate, 'years');
        console.log(age, 'age');
        return age >= minAge;
      },
    ),
  mobileNumber: yup
    .string()
    .required('Mobile Number is required')
    .matches(Regx.MOBILE_REGEX, 'Invalid Mobile Number'),
  password: yup
    .string()
    .required(validation.passwordRequired)
    .min(Value.CONSTANT_VALUE_8, validation.PASSWORD_MIN)
    .matches(Regx.SPECIAL_CHAR, {
      excludeEmptyString: true,
      message: validation.SPECIAL_CHAR,
    })
    .matches(Regx.ALPHA_CAP, {
      excludeEmptyString: true,
      message: validation.CAPSLOCK,
    })
    .matches(Regx.NUM, {
      excludeEmptyString: true,
      message: validation.NUM_PASS,
    })
    .matches(Regx.ALPHA_LOWER, {
      excludeEmptyString: true,
      message: validation.LOWER_CASE,
    }),
  confirmPassword: yup
    .string()
    .required(validation.CONFIRM_PASSWORD)
    .oneOf(
      [yup.ref('password'), null],
      'Password and Confirm Password should be same.',
    ),
});

export const appointment = yup.object().shape({
  email: yup
    .string()
    .required(validation.emailRequired)
    .email(validation.emailInvalid)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: validation.emailInvalid,
    }),
});

export const forgotPassword = yup.object().shape({
  email: yup
    .string()
    .required(validation.emailRequired)
    .email(validation.emailInvalid)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: validation.emailInvalid,
    }),
});

export const validationSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(
      /[0-9!@#$%^&*(),.?":{}|<>]/,
      'Password must contain at least one number or special character',
    ),
  setPassword: yup
    .string()
    .oneOf(
      [yup.ref('password'), null],
      'Confirm Password must match with password',
    ),
});
export const validationMessages = [
  {
    isValid: 'length',
    message: 'Password must be at least 8 characters long.',
  },
  {
    isValid: 'uppercase',
    message: 'Password must contain at least one uppercase letter.',
  },
  {
    isValid: 'lowercase',
    message: 'Password must contain at least one lowercase letter.',
  },
  {
    isValid: 'numberOrSpecial',
    message: 'Password must contain at least one number or special character.',
  },
];

export const editProfile = yup.object().shape({
  firstName: yup
    .string()
    .required(validation.first_name)
    .transform(value => (value ? value.trim() : value))
    .max(30, validation.max_char)
    .matches(Regx.FIRST_NAME, {
      excludeEmptyString: true,
      message: validation.INVALID_FIRST_NAME,
    }),
  lastName: yup
    .string()
    .required(validation.last_name)
    .transform(value => (value ? value.trim() : value))
    .max(30, validation.max_char)
    .matches(Regx.FIRST_NAME, {
      excludeEmptyString: true,
      message: validation.INVALID_LAST_NAME,
    }),
  dob: yup
    .string()
    .required(validation.DOB_REQUIRED)
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/,
      'Invalid Date format. Please use the format "DD/MM/YYYY".',
    )
    .test(
      'valid_date',
      'Date of birth should be more than 18 years old.',
      function (value) {
        const minAge = 18;
        const currentDate = moment();
        const enteredDate = moment(value, 'DD/MM/YYYY', true);

        if (!enteredDate.isValid()) {
          return false;
        }

        const age = currentDate.diff(enteredDate, 'years');
        return age >= minAge;
      },
    ),
  gender: yup.string().required(validation.GENDER_REQUIRED),
  email: yup
    .string()
    .required(validation.emailRequired)
    .email(validation.emailInvalid)
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: validation.emailInvalid,
    }),
  weight: yup.string().required(validation.WEIGHT_REQUIRED).matches(Regx.NUM, {
    excludeEmptyString: true,
    message: validation.NUM_PASS,
  }),
  height: yup.string().required(validation.HEIGHT_REQUIRED).matches(Regx.NUM, {
    excludeEmptyString: true,
    message: validation.NUM_PASS,
  }),
  mobileNumber: yup
    .string()
    .required('Mobile Number is required')
    .matches(Regx.MOBILE_REGEX, 'Invalid Mobile Number'),
});

export const addMember = yup.object().shape({
  relation: yup.string().required('Relation is required'),
  firstName: yup.string().required('First Name is required'),
  lastName: yup.string().required('Last Name is required'),
  gender: yup.mixed().test('is-object', 'Gender is required', function (value) {
    // Ensure that the value is an object
    return typeof value === 'object' && value !== null;
  }),
  dob: yup
    .string()
    .required('Date of Birth is required')
    .matches(
      /^\d{2}\/\d{2}\/\d{4}$/,
      'Date of Birth should be in the format MM/DD/YYYY',
    ),
  email: yup
    .string()
    .required('Email is required')
    .email('Invalid Email')
    .matches(Regx.EMAIL, {
      excludeEmptyString: true,
      message: 'Invalid Email',
    }),
  mobileNumber: yup
    .string()
    .required('Mobile Number is required')
    .matches(Regx.MOBILE_REGEX, 'Invalid Mobile Number'),
  code: yup.string().required('Country Code is required'),
  weight: yup.string().required('Weight is required').matches(Regx.NUM, {
    excludeEmptyString: true,
    message: 'Invalid Weight',
  }),
  height: yup.string().required('Height is required').matches(Regx.NUM, {
    excludeEmptyString: true,
    message: 'Invalid Height',
  }),
});
