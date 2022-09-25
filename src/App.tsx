import React, {useEffect, useRef, ReactElement, useState} from 'react';
import styled from "styled-components";
import {IoIosAddCircleOutline} from "react-icons/io";


import { useGlobal } from './contexts/Global';
import Todo from "./components/Todo";
import Button from "./components/Button";
import { ITodo } from './contexts/Global';



const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
`;


const TodoContainer = styled.div`
  width: 100%;
  min-height: 500px;
  border-radius: 10px;
  margin-top: 100px;
  max-height: 600px;
  background-color: ${(props: any) => props.theme.background};
  width: min(100% - 6rem, 600px);
  margin-inline: auto;
  box-shadow: 0px 0px 20px -5px #ccc;
  overflow-y: hidden;
`;


const TodoTop = styled.div`
  display: flex;
  margin-bottom: 8px;
  width: 100%;

  & input {
    flex: 1;
    border: none;
    outline: none;
    padding: 12px;
    line-height: 2;
  }
`;

const Todos = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5px;
  overflow-y: scroll;
  height: 100%;
`



const App: React.FC<{}> = ({}): ReactElement => {
  const flag = useRef<boolean>(false);
  const [todo, setTodo] = useState<string>("");
  const {todos, addTodo} = useGlobal();
  console.log(todos);
  useEffect(() => {
    if(flag.current) return;
    console.log("App component is mounted");
    flag.current = true;
    return () => console.log("App component is unmounted");
  }, [todos])

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTodo(_ => e.target.value);
  } 

  const addTodoHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if(todo.trim() === "") return;
    else {
      let newTodo = {
        id: Math.floor(Math.random() * 1000),
        todo
      }
      setTodo(_ => "");
      console.log(newTodo);
      if(addTodo === undefined) return;
      addTodo(newTodo);
    }
  }


  return (
    <AppContainer>
      <TodoContainer>
        <TodoTop>
          <input value={todo} onChange={changeHandler} placeholder="Add todo" />
          <Button onClick={addTodoHandler}>
            <IoIosAddCircleOutline />
          </Button>
        </TodoTop>
        <Todos>
          {
            todos.map((t: ITodo, i: number) => (
              <Todo key={i} {...t} />
            ))
          }
        </Todos>
      </TodoContainer>
    </AppContainer>
  )
}



export default App;