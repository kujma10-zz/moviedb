import {constantAction, payloadForwardingAction} from './index';

export const MOVIES_REQUESTED = 'MOVIES_REQUESTED';
export const moviesRequested = constantAction(MOVIES_REQUESTED);

export const MOVIES_RECEIVED = 'MOVIES_RECEIVED';
export const moviesReceived = payloadForwardingAction(MOVIES_RECEIVED);

export const MOVIES_REQUEST_FAILED = 'MOVIES_REQUEST_FAILED';
export const moviesRequestFailed = constantAction(MOVIES_REQUEST_FAILED);
