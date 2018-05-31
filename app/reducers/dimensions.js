export default (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_DIMENSIONS':
      return {...state, ...action.dims, orientation: action.dims.height > action.dims.width ? 'portrait' : 'landscape' };
      default: return state;
  }
}