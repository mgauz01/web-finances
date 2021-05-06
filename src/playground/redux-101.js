import { createStore } from "redux";
//Action generators

const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy: incrementBy
})

const decrementCount = ({decrementBy = 1}={}) => ({
  type: 'DECREMENT',
  decrementBy: decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({userCount = 0}={}) => ({
  type: 'SET',
  count: userCount
})
const store = createStore((state = { count: 0 }, action) => {
  switch(action.type){
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
   case 'RESET':
      return {
        count: 0
      } 
    case 'SET':
      return {
        count: action.count
      }
    default:
      return state
  }
});



const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// })
store.dispatch(incrementCount({incrementBy: 6}))


store.dispatch(decrementCount({decrementBy: 10}))
// store.dispatch({
//   type: "RESET"
// })
store.dispatch(resetCount())

store.dispatch(setCount({userCount: 40}))
console.log(store.getState())

