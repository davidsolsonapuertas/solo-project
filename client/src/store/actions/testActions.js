import * as actionTypes from './actionTypes';
import * as testAPI from '../../testAPI';

export const fetchTests = () => {
  return dispatch => {
    testAPI
      .getTests()
      .then(data => dispatch({ type: actionTypes.GET_TESTS, payload: data }));
  };
};

export const postTest = (questions, title) => {
  return dispatch => {
    testAPI
      .postTest({ questions, title })
      .then(data => dispatch({ type: actionTypes.POST_TEST, payload: data }));
  };
};

export const deleteTest = id => {
  return dispatch => {
    testAPI
      .deleteTest(id)
      .then(data => dispatch({ type: actionTypes.DELETE_TEST, payload: id }));
  };
};

export const fetchQuizz = (id) => {
  return dispatch => {
    testAPI
      .getQuizz(id)
      .then(data => dispatch({ type: actionTypes.GET_CURRENTQUIZZ, payload: data }));
  };
};

export const checkUserAnswer = (answerObject) => {
  return dispatch => {
    testAPI
      .checkAnswer(answerObject)
      .then(data => dispatch({ type: actionTypes.POST_CHECK_ANSWER, payload: {data, answerObject}}));
  };
};
