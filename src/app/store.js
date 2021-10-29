import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './features/counter/counterSlice'
import quotationReducer from './features/productSlice/quotationSlice'


export default configureStore({
  reducer: {
    // counter: counterReducer,
    quotation: quotationReducer,

  },
})