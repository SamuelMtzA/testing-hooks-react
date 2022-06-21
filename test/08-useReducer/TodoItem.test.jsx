import { fireEvent, render, screen} from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/todoItem"

describe('testing <TodoItem/> component', () => { 

  const todo = {
    id: 1,
    description: 'testing mock',
    done: false
  }
  const handleDeleteMock = jest.fn()
  const handleToggleMock = jest.fn()
  const pos = 0

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should show the todo that is need to complete and value of pos', () => { 
    render(
      <TodoItem
      todo={ todo }
      pos={ pos }
      handleDelete={ handleDeleteMock }
      handleToggle={ handleToggleMock }
      />
    )

    // screen.debug();
    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe("list-group-item list-group-item-light");
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe("false");
    //pos+1. testing mock
    expect(spanElement.textContent).toBe(`${pos+1}. ${todo.description}`);
    
   
  })

  test('should show the todo completed', () => { 
    todo.done = true;

    render(
      <TodoItem
      todo={ todo }
      handleDelete={ handleDeleteMock }
      handleToggle={ handleToggleMock }
      />
    )

    // screen.debug();
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe("complete");
    
   
  })

  test('should show that handleToggle was clicked', () => {
    
    render(
      <TodoItem
      todo={ todo }
      handleDelete={ handleDeleteMock }
      handleToggle={ handleToggleMock }
      />
    )

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);
    expect(handleToggleMock).toHaveBeenCalledTimes( todo.id );
  })

  test('should the button called the handleDelete', () => {
    
    render(
      <TodoItem
      todo={ todo }
      handleDelete={ handleDeleteMock }
      handleToggle={ handleToggleMock }
      />
    )
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(handleDeleteMock).toHaveBeenCalledTimes( todo.id );
  })

})