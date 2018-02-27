import {constantAction, payloadForwardingAction} from './index';

export const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED';
export const categoriesRequested = constantAction(CATEGORIES_REQUESTED);

export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const categoriesReceived = payloadForwardingAction(CATEGORIES_RECEIVED);
