import {constantAction, payloadForwardingAction} from './index';

export const LOGIN_REQUESTED = 'LOGIN_REQUESTED';
export const loginRequested = payloadForwardingAction(LOGIN_REQUESTED);

export const LOGIN_SUCCEDED = 'LOGIN_SUCCEDED';
export const loginSucceded = payloadForwardingAction(LOGIN_SUCCEDED);

export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';
export const loginRequestFailed = constantAction(LOGIN_REQUEST_FAILED);
