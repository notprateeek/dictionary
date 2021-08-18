import produce from 'immer';
import { FETCH, FETCH_SUCCESS } from './constants';

export const initialState = {
  loading: false,
  result: [],
};

const homepageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH:
        draft.loading = true;
        break;
      case FETCH_SUCCESS:
        draft.result = action.data;
        draft.loading = false;
      default:
        return draft;
    }
  });

export default homepageReducer;
