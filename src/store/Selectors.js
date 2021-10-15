import { createSelector } from 'reselect';

const getState = state => state;

//  General getters

export const getPastLogs = createSelector(getState, state => state.saved);

//	Specific getters
export const getQuote = id => createSelector(getState, state => state.quotes.filter(q => parseInt(q.id) === parseInt(id))[0]);