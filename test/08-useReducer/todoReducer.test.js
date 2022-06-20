import { todoReducer } from "../../src/08-useReducer/todoReducer";


describe('testing in todoReducer', () => { 
  const initialState = [{
    id: 1,
    description: 'new todo',
    done: false,
  }];
  
  test('should return the initial state', () => { 
    const newState = todoReducer(initialState, {});
    expect(newState).toBe(initialState);
    
  })
  
  test('should add a todo', () => { 
    const action = {
      type: 'ADD_TODO',
      payload: {
        id: 2,
        description: 'new todo',
        done: false,
      }
    }
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);

  })

  test('should remove a todo', () => { 
    const action = {
      type: 'REMOVE_TODO',
      payload: 1
    }
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);

  })
  test('should toggle a todo', () => { 
    const action = {
      type: 'TOGGLE_TODO',
      payload:1
    }
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(1);
    expect(newState[0].done).toBeTruthy();

  })
  

})