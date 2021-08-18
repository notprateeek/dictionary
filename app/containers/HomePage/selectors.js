import { createSelector } from 'reselect';
import { initialState } from './reducer';

const homepageDomain = state => state.dictionary || initialState;

const makeSelectResult = () =>
  createSelector(
    homepageDomain,
    substate => substate.result,
  );

const makeSelectLoading = () =>
  createSelector(
    homepageDomain,
    substate => substate.loading,
  );

export { makeSelectResult, makeSelectLoading };
