import { FETCH, FETCH_SUCCESS } from './constants';

export const fetchData = value => ({
  type: FETCH,
  value,
});

export const fetchDataSuccess = data => ({
  type: FETCH_SUCCESS,
  data,
});
