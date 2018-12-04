const requestActionName = (prefix) => prefix + '_REQUEST';
const successActionName = (prefix) => prefix + '_SUCCESS';
const failureActionName = (prefix) => prefix + '_FAILURE';

export const generateRequestActionTypesFor = (prefix) => ({
  [prefix]: prefix,
  [requestActionName(prefix)]: requestActionName(prefix),
  [successActionName(prefix)]: successActionName(prefix),
  [failureActionName(prefix)]: failureActionName(prefix),
})

export const generateRequestActions = (prefix) => ({
  requestStarted: () => ({
    type: requestActionName(prefix),
  }),
  requestSucceeded: (data) => ({
    type: successActionName(prefix),
    data
  }),
  requestFailed: (error) => ({
    type: failureActionName(prefix),
    error
  }),
})
