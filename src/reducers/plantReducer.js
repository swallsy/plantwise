export default plantReducer (state = {}, action) => {
 switch (action.type) {
  case 'FETCH_PLANTS':
   return {
    result: action.payload
   }
  default:
   return state
 }
}
