/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Container, TextField, Button } from '@material-ui/core';
import reducer from './reducer';
import saga from './saga';
import { makeSelectResult, makeSelectLoading } from './selectors';
import { fetchData } from './actions';

function HomePage(props) {
  const [value, setValue] = useState('');

  useInjectReducer({ key: 'dictionary', reducer });
  useInjectSaga({ key: 'dictionary', saga });

  return (
    <Container>
      <h1 style={{ textAlign: 'center' }}>Dictionary</h1>
      <form onSubmit={() => props.dispatch(fetchData(value))}>
        <TextField
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button type={submit} onClick={() => props.dispatch(fetchData(value))}>submit</Button>
      </form>
      {props.result.map(item =>
        item.meanings.map(item =>
          item.definitions.map(item => <h4 key={item}>{item.definition}</h4>),
        ),
      )}
    </Container>
  );
}

const mapStateToProps = createStructuredSelector({
  result: makeSelectResult(),
  loading: makeSelectLoading(),
});

const mapDispatchToProps = dispatch => ({
  dispatch,
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(HomePage);
