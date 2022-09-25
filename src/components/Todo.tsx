import React, {useEffect, ReactElement} from "react";
import styled from "styled-components";
import {AiOutlineDelete} from "react-icons/ai";



import { ITodo } from "../contexts/Global";
import Button from "./Button";
import { useGlobal } from "../contexts/Global";

const TodoLayout = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    background-color: ${(props: any) => props.theme.text};
    color: ${(props: any) => props.theme.background};
    transition: all .5s ease-in-out;


    &:hover {
        background-color: ${(props: any) => props.$light ? 'rgba(0,0,0,.9)' : 'rgba(255,255,255,.9)'};
    }

    & span {
        text-transform: uppercase;
        font-weight: normal;
        letter-spacing:0.4px;
    }

    & button {
        background-color: #f7567c;
        border-radius: 8px;
        box-shadow: 0px 0px 20px -5px #ccc;
        
        & svg {
            font-size: 1.5rem;
        }
    }
`;

type TodoProps = {
    light: boolean;
} & ITodo;


const Todo: React.FC<TodoProps> = ({id, todo, light}): ReactElement => {
    useEffect(() => {
        console.log("Todo component is mounted");
        return () => console.log("Todo component is unmounted");
    }, [])
    const {removeTodo} = useGlobal();

    function removeTodoHandler(e: React.MouseEvent<HTMLButtonElement>): void {
        console.log(id);
        if(removeTodo === undefined) return;
        removeTodo(id);
    }

    return (
        <TodoLayout $light={light}>
            <span>{todo}</span>
            <Button onClick={removeTodoHandler}>
                <AiOutlineDelete />
            </Button>
        </TodoLayout>
    )
}



export default Todo;