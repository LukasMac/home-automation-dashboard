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
  requestAction: () => ({
    type: requestActionName(prefix),
  }),
  successAction: (data) => ({
    type: successActionName(prefix),
    data
  }),
  failureAction: (error) => ({
    type: failureActionName(prefix),
    error
  }),
})
