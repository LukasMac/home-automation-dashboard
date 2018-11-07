import axios from 'axios ';

export const types = {
  CLICK: 'CLICK',
};

export const click = () => ({
  type: types.CLICK,
});

export const fetchTrafficInfo = () => {
  // return (dispatch, getState) => {
  //   dispatch({type : "REQUEST_STARTED"});
  //
  //       myAjaxLib.post("/someEndpoint", {data : someValue})
  //           .then(
  //               response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
  //               error => dispatch({type : "REQUEST_FAILED", error : error})
  //           );    
  //   };;
  return { type: 'AAA' };
};
