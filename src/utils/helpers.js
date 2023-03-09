// // CURRYING FUNCTION
// export const payloadCreator = (asyncFunction) => async (args, thunkAPI) => {
//   try {
//     const response = await asyncFunction(args);
//     return response;
//   } catch (errors) {
//     return thunkAPI.rejectWithValue(errors);
//   }
// };
