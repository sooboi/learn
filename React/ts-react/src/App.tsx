import React, {
  useContext,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./App.css";
import Editor from "./component/Editor";
import { Todo } from "./types";
import TodoItem from "./component/TodoItem";
import _ from "lodash";

// reducer 에 사용할 Action 정의
type Action =
  | {
      type: "CREATE";
      data: {
        id: number;
        content: string;
      };
    }
  | { type: "REMOVE"; id: number };

// reducer 생성
function reducer(state: Todo[], action: Action) {
  switch (action.type) {
    case "CREATE": {
      return [...state, action.data];
    }
    case "REMOVE": {
      return state.filter((it) => it.id !== action.id);
    }
  }
}

// Context 로 todo state 와 상태 변화 함수들을 전역에 공급
export const TodoStateContext = React.createContext<Todo[] | null>(null);
export const TodoDispatchContext = React.createContext<{
  onClickAdd: (text: string) => void;
  onClickRemove: (id: number) => void;
} | null>(null);

export function useTodoDispatch() {
  const dispatch = useContext(TodoDispatchContext);
  if (!dispatch) throw new Error("TodoDispatchContext에 문제 발생");
  return dispatch;
}

function App() {
  // reducer 상태관리
  const [todo, dispatch] = useReducer(reducer, []);

  const idRef = useRef(0);

  const onClickAdd = (text: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content: text,
      },
    });
  };

  const onClickRemove = (id: number) => {
    dispatch({
      type: "REMOVE",
      id: id,
    });
  };

  useEffect(() => {
    console.log(todo);
  }, [todo]);

  return (
    <div className="App">
      <TodoStateContext.Provider value={todo}>
        <TodoDispatchContext.Provider
          value={{
            onClickAdd,
            onClickRemove,
          }}
        >
          <h1>Todo</h1>
          <Editor />
          <div>
            {todo.map((todo) => (
              <TodoItem key={todo.id} {...todo} />
            ))}
          </div>
        </TodoDispatchContext.Provider>
      </TodoStateContext.Provider>
    </div>
  );
}

export default App;
