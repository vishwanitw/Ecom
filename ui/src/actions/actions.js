

export function getCategories() {
  return function(dispatch) {
    dispatch({
      type: 'FETCH_CATEGORIESLIST_REQUEST'
    });
    return fetch('http://services.groupkt.com/country/search?text=un')
      .then(response => response.json().then(response => ({ response })))
      .then(({ response}) => {
        if (!response) {
          dispatch({
            type: 'FETCH_CATEGORIESLIST_FAILURE',
            error: response.RestResponse.messages
          });
        } else {
          dispatch({
            type: 'FETCH_CATEGORIESLIST_SUCCESS',
            payload: response.RestResponse.result
          });
        }
      });
  }
}