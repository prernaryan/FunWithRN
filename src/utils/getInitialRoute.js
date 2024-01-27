import AsyncStorage from '@react-native-async-storage/async-storage';
import {store} from '../redux/store';
import {Routes} from '../constants/Constants';

// Define a constant to represent the key for checking if onboarding has been completed
const ONBOARDING_COMPLETED_KEY = 'onboarding_completed';

// Function to check if onboarding has already been completed
const isOnboardingCompleted = async () => {
  try {
    const onboardingCompleted = await AsyncStorage.getItem(
      ONBOARDING_COMPLETED_KEY,
    );
    return onboardingCompleted === 'true';
  } catch (error) {
    console.error('Error checking onboarding status:', error);
    return false;
  }
};

// Function to mark onboarding as completed
export const markOnboardingCompleted = async () => {
  console.log('SetUp');
  try {
    await AsyncStorage.setItem(ONBOARDING_COMPLETED_KEY, 'true');
  } catch (error) {
    console.error('Error marking onboarding as completed:', error);
  }
};
const getInitRouteName = async () => {
  const {login} = await store.getState().Auth;
  const onboardingCompleted = await isOnboardingCompleted();
  if (!onboardingCompleted && !login) {
    return Routes.OnboardingScreen;
  }
  console.log('=================login===================');
  console.log(login);
  console.log('====================================');
  if (login) {
    return Routes.Dashboard;
  } else {
    return Routes.AuthScreen;
  }
};
export default getInitRouteName;
