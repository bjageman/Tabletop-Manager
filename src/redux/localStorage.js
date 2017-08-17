
export const localStorageMiddleWare = store => next => action => {
  console.log("Middleware triggered:", action);
  next(action);
}




// export const loadState = () => {
//   try {
//     const serializedState = localStorage.getItem('state');
//
//     if (serializedState === null) {
//       return undefined;
//     }
//     console.log(JSON.parse(serializedState))
//     return JSON.parse(serializedState);
//
//   } catch (err) {
//     return undefined;
//   }
// };
//
// export const saveState = (state) => {
//   try {
//     const serializedState = JSON.stringify(state);
//     localStorage.setItem('state', serializedState);
//   } catch (err) {
//     // die
//   }
// };
