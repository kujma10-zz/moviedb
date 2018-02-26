import {payloadForwardingAction} from './index';

export const MOVIE_CREATE_REQUESTED = 'MOVIE_CREATE_REQUESTED';
export const movieCreateRequested = payloadForwardingAction(MOVIE_CREATE_REQUESTED);
