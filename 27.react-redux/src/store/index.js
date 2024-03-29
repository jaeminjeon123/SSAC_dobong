import { combineReducers } from "redux";
import { isDataReducer } from "./module/isDataReducer";
import { counterReducer } from "./module/counterReducer";

// 여러 개의 리듀서를 하나로 합쳐주는 combineReducer
const rootReducer = combineReducers({
  isData: isDataReducer,
  counter: counterReducer,
});

export default rootReducer;