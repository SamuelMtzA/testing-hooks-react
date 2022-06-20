import { render, screen} from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/todoItem"

describe('testing <TodoItem/> component', () => { 

  const todo = {
    id: 1,
    description: 'testing mock',
    done: false
  }
  const handleDelete = jest.fn()
  const handleToggle = jest.fn()
  const pos = 0

  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('should show the todo that is need to complete', () => { 
    render(
      <TodoItem
      todo={ todo }
      pos={ pos }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
      />
    )

    screen.debug();
    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe("list-group-item list-group-item-light");
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe("false");
    
   
  })

  test('should show the todo completed', () => { 
    render(
      <TodoItem
      todo={ todo }
      pos={ pos }
      handleDelete={ handleDelete }
      handleToggle={ handleToggle }
      />
    )

    screen.debug();
    const liElement = screen.getByRole('listitem')
    expect(liElement.className).toBe("list-group-item list-group-item-light");
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toBe("false");
    
   
  })


})