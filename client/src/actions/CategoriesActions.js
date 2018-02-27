import {constantAction, payloadForwardingAction} from './index';

export const CATEGORIES_REQUESTED = 'CATEGORIES_REQUESTED';
export const categoriesRequested = constantAction(CATEGORIES_REQUESTED);

export const CATEGORIES_RECEIVED = 'CATEGORIES_RECEIVED';
export const categoriesReceived = payloadForwardingAction(CATEGORIES_RECEIVED);

export const CATEGORY_MOVIES_REQUESTED = 'CATEGORY_MOVIES_REQUESTED';
export const categoryMoviesRequested = payloadForwardingAction(CATEGORY_MOVIES_REQUESTED);
