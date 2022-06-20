import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../src/hooks/useCounter"

describe('first test in useconuter', () => { 
  test('should return default values', () => { 
    const { result } = renderHook(() => useCounter());
    const { counter, increment, decrement, reset } = result.current;

    expect(counter).toBe(10);
    expect(increment).toEqual(expect.any(Function));
    expect(decrement).toEqual(expect.any(Function));
    expect(reset).toEqual(expect.any(Function));
    
  })

  test('should return 100 as value', () => { 
    const { result }  = renderHook(() => useCounter(100));
    const { counter } = result.current;

    expect(counter).toBe(100);
  })
  
  test('should increment', () => { 
    const { result }  = renderHook(() => useCounter(100));
    const { increment } = result.current;

    act(()=>{
      increment(1);
      increment(3);
    })

    expect(result.current.counter).toBe(104);
  })

  test('should descrement', () => { 
    const { result }  = renderHook(() => useCounter(100));
    const { decrement } = result.current;

    act(()=>{
      decrement(1);
      decrement(5);
    })

    expect(result.current.counter).toBe(94);
  })

  test('should reset', () => { 
    const { result }  = renderHook(() => useCounter(100));
    const { reset, increment, decrement } = result.current;

    act(()=>{
      decrement(5);
      increment(10);
      reset();
    })

    expect(result.current.counter).toBe(100);
  })

  
})