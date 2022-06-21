import {screen, render, fireEvent} from '@testing-library/react'
import { UserContext } from '../../src/09-useContext/context/UserContext'
import { LoginPage } from '../../src/09-useContext/LoginPage'

describe('testing <LoginPage/>', () => { 

  test('should render the component without a user', () => { 
    render(
    <UserContext.Provider value={{user: null, setUser: null}}>
      <LoginPage/>
    </UserContext.Provider>
    )
    expect(screen.getByText('LoginPage').innerHTML).toBe('LoginPage')
    const preElement = screen.getByLabelText('pre');
    expect(preElement.innerHTML).toBe("null");
  })

  test('should called setUser when is clicked', () => { 
    const setUserMock = jest.fn();

    render(
    <UserContext.Provider value={{user: null, setUser: setUserMock }}>
      <LoginPage/>
    </UserContext.Provider>
    )
    expect(screen.getByText('LoginPage').innerHTML).toBe('LoginPage')
    const preElement = screen.getByLabelText('pre');
    expect(preElement.innerHTML).toBe("null");
    // screen.debug();
    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);
    expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Juan', email: 'juan@google.com' });

  })
 
})