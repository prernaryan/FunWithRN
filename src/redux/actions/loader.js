import {HIDE_LOADER, HIDE_TOAST, SHOW_LOADER, SHOW_TOAST} from '../Type';

export const showAppLoader = (text = '') => ({
  type: SHOW_LOADER,
  payload: {text: text},
});

export const hideAppLoader = () => ({
  type: HIDE_LOADER,
});

export const showAppToast = (isErrToast, text = '') => ({
  type: SHOW_TOAST,
  payload: {isErrToast, text},
});

export const hideAppToast = () => ({
  type: HIDE_TOAST,
});
