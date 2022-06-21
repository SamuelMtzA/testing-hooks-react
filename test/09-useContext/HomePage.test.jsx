import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe('testing <HomePage/>', () => { 
  const user = {
    id: 1,
    name: 'John Doe'
  }

  test('should show the component without the user', () => { 
    render(
    <UserContext.Provider value={{user: null}}>
      <HomePage />
    </UserContext.Provider>
    );
    // screen.debug()
    const preElement = screen.getByLabelText('pre');
    expect(preElement.innerHTML).toBe("null");
  })

  test('should show the component with the user', () => { 
    render(
    <UserContext.Provider value={{user: user}}>
      <HomePage />
    </UserContext.Provider>
    );
    screen.debug()
    const preElement = screen.getByLabelText('pre');
    expect(preElement.innerHTML).toBe(JSON.stringify(user, null, 3));
  })

})