import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// 同步设置
const fooderStore = createSlice({
  name: 'fooder',
  initialState: {
    foodsList: [],
    activeIndex: 0,
    cartList: []
  },
  reducers: {
    setFoodsList(state, action) {
      state.foodsList = action.payload
    },
    setActiveIndex(state, action) {
      state.activeIndex = action.payload
    },
    setCartList(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload.id)
      if (item) {
        item.count++
      } else {
        state.cartList.push(action.payload)
      }
    },
    plusCart(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload)
      item.count++
    },
    minusCart(state, action) {
      const item = state.cartList.find((item) => item.id === action.payload)
      if (item.count > 0) item.count--
      if (state.cartList.reduce((a, b) => a + b.count, 0) === 0)
        state.cartList = []
    },
    clearCartList(state) {
      state.cartList = []
    }
  }
})

const {
  setFoodsList,
  setActiveIndex,
  setCartList,
  clearCartList,
  plusCart,
  minusCart
} = fooderStore.actions
const url = 'http://localhost:3001/takeaway'
// 异步设置
const fetchGetFood = () => {
  return async (dispatch) => {
    const res = await axios.get(url)
    dispatch(setFoodsList(res.data))
  }
}

export {
  fetchGetFood,
  setActiveIndex,
  setCartList,
  clearCartList,
  plusCart,
  minusCart
}

const reducer = fooderStore.reducer

export default reducer
