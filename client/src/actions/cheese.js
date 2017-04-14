export const FETCH_CHEESE_REQUEST = 'FETCH_CHEESE_REQUEST';
export const fetchCheeseRequest = () => ({
  type: FETCH_CHEESE_REQUEST
});

export const FETCH_CHEESE_SUCCESS = 'FETCH_CHEESE_SUCCESS';
export const fetchCheeseSuccess = (cheese) => ({
  type: FETCH_CHEESE_SUCCESS,
  cheese
});

export const FETCH_CHEESE_ERROR = 'FETCH_CHEESE_ERROR';
export const fetchCheeseError = (error) => ({
  type: FETCH_CHEESE_ERROR,
  error
});

export const fetchCheese = ()=> dispatch => {
  dispatch(fetchCheeseRequest());
  fetch('http://localhost:3001/api/cheeses')
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(cheese => {
    console.log(cheese)
    dispatch(fetchCheeseSuccess(cheese))
  })
  .catch(error => dispatch(fetchCheeseError(error)));
}