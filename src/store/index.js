import { configureStore } from '@reduxjs/toolkit'
import fooderReducer from './modules/takeaway'

const store = configureStore({
  reducer: {
    fooder: fooderReducer
  }
})

export default store
