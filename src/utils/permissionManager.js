import {Alert, Platform, PermissionsAndroid} from 'react-native';
import {
  request,
  PERMISSIONS,
  RESULTS,
  openSettings,
} from 'react-native-permissions';

// import messaging from '@react-native-firebase/messaging';
const ERROR_MESSAGES = {
  ALLOW_PERMISSION:
    'Sorry, We need camera roll permissions in order to import your images',
  ALLOW_PERMISSION_NOTIFICATION:
    'Sorry, We require notification permissions to enable push notifications.',
  CANCEL: 'Cancel',
  ALLOW: 'Allow',
  GO_TO_SETTING: 'Go to Settings',
};
export const checkCameraPermission = async () => {
  const result = await requestCameraPermission();
  console.log(result, 'resultresult');
  if (result === RESULTS.GRANTED) {
    return true;
  } else if (RESULTS.UNAVAILABLE) {
    Alert.alert('This feature is not available on this device');
    console.log(
      'This feature is not available (on this device / in this context)',
    );
  } else {
    showPermissionDeniedAlert('Camera');
  }
  return false;
};
export const checkGalleryPermission = async () => {
  const result = await requestGalleryPermission();
  console.log(result, 'result');
  if (result === RESULTS.GRANTED || result === RESULTS.LIMITED) {
    return true;
  } else {
    showPermissionDeniedAlert('Gallery');
  }
  return false;
};
export const requestCameraPermission = async () => {
  return await request(
    Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA,
  );
};
const openSettingsAndAlert = async () => {
  await openSettings();
};

const showPermissionDeniedAlert = permissionType => {
  Alert.alert(
    `Permission Required`,
    `Please allow MedCuratio to access your ${permissionType}.`,
    [
      {text: 'Cancel'},
      {
        text: 'Go to Settings',
        onPress: openSettingsAndAlert,
      },
    ],
    {cancelable: false},
  );
};

export const requestGalleryPermission = async () => {
  return await request(
    Platform.OS === 'ios'
      ? PERMISSIONS.IOS.PHOTO_LIBRARY
      : PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  );
};

// export const checkNotificationPermission = async () => {
//   const result = await requestNotificationPermission();
//   if (!result) {
//     showErrorAlert(
//       'Notification Permission Required',
//       ERROR_MESSAGES.ALLOW_PERMISSION_NOTIFICATION,
//     );
//   }
//   return result;
// };

// const showErrorAlert = (title, message) => {
//   Alert.alert(
//     title,
//     message,
//     [
//       {text: ERROR_MESSAGES.CANCEL},
//       {
//         text: ERROR_MESSAGES.GO_TO_SETTING,
//         onPress: openSettingsAndAlert,
//       },
//     ],
//     {cancelable: false},
//   );
// };
// export const requestNotificationPermission = async () => {
//   let authStatus;
//   let enabled = false;
//   if (Platform.OS === 'ios') {
//     authStatus = await messaging().requestPermission();
//     enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;
//   } else if (Platform.OS === 'android') {
//     // For Android, request notification permission using PermissionsAndroid
//     const granted = await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
//     );
//     enabled = granted === PermissionsAndroid.RESULTS.GRANTED;
//   }
//   return enabled;
// };

export const checkLocationPermission = async () => {
  try {
    let result;
    if (Platform.OS === 'android') {
      result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonPositive: 'OK',
        },
      );
    } else if (Platform.OS === 'ios') {
      result = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    }

    if (result === RESULTS.GRANTED) {
      // Permission granted, you can now use the location services
      console.log('Location permission granted');
    } else {
      // Permission denied or revoked
      console.log('Location permission denied');
    }
  } catch (error) {
    console.error('Error checking or requesting location permission:', error);
  }
};
