import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";

const initialStore ={
    cartReducer:{
        cartItems: JSON.parse(localStorage.getItem('cartItems')) ?? []
    }
}
const store = createStore(rootReducer,initialStore, composeWithDevTools());

 




export default store;
