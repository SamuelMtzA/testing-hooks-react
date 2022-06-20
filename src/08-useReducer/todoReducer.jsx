export const todoReducer = (state = [], action = {}) => {
  switch (action.type) {
      case 'ADD_TODO':
          return [...state, action.payload];
      case 'REMOVE_TODO':
          return state.filter(todo => todo.id !== action.payload);
      case 'REMOVE_ALL':
          return [];
      case 'TOGGLE_TODO':
          return state.map(todo => {
              if (todo.id === action.payload) {
                  return {
                      ...todo,
                      done: !todo.done
                  }
              }else{
                  return todo;
              }
          });
      case 'TOGGLE_ALL':
          return state.map(todo => {
              return {
                  ...todo,
                  done: !todo.done && true
              }
          });
  
      default:
          return state;
  }
}