import {payloadForwardingAction} from './index';

export const MOVIE_CREATE_REQUESTED = 'MOVIE_CREATE_REQUESTED';
export const movieCreateRequested = payloadForwardingAction(MOVIE_CREATE_REQUESTED);

export const MOVIE_EDIT_REQUESTED = 'MOVIE_EDIT_REQUESTED';
export const movieEditRequested = payloadForwardingAction(MOVIE_EDIT_REQUESTED);

export const MOVIE_DELETE_REQUESTED = 'MOVIE_DELETE_REQUESTED';
export const movieDeleteRequested = payloadForwardingAction(MOVIE_DELETE_REQUESTED);
