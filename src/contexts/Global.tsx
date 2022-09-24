import React, {createContext, useContext, Context, useEffect, useState} from "react";



export interface ITodo {
    id: number
    todo: string
}


interface DefaultTodo {
    todos: ITodo[]
    addTodo?: (todo: ITodo) => void
    removeTodo?: (todoId: number) => void
}


// function getDefaultValue(todos: ITodo[]): DefaultTodo {
//     let todoList: Array<ITodo> = todos;
//     const addTodo = (todo: ITodo): void => {
//         console.log(todoList);
//         let todosCopy = [...todoList];
//         todosCopy.push(todo);
//         todoList = todosCopy;
//     }
//     const removeTodo = (todoId: number): void =>  {
//         let todosCopy = [...todoList];
//         let index = todosCopy.findIndex(t => t.id === todoId);
//         todosCopy.splice(index, 1);
//         todoList = todosCopy;
//     }

//     return {
//         todos: todoList,
//         addTodo,
//         removeTodo
//     }
// }


// const defaultValue: DefaultTodo = getDefaultValue([{id: 187, todo: 'on emore'}]);


// class DefaultValue implements DefaultTodo {
//     public todos;
//     constructor(todos: ITodo[]){
//         this.todos = todos;
//     }

//     addTodo(todo: ITodo): void {
//         console.log(this, todo);
//         let todosCopy = [...this.todos];
//         todosCopy.push(todo);
//         this.todos = todosCopy;
//     }

//     removeTodo(todoId: number): void {
//         let todosCopy = [...this.todos];
//         let index = todosCopy.findIndex(t => t.id === todoId);
//         todosCopy.splice(index, 1);
//         this.todos = todosCopy;
//     }
// }


// const defaultValue: DefaultValue = new DefaultValue([]);

const GlobalContext: Context<DefaultTodo> = createContext<DefaultTodo>({todos: []});


export const useGlobal = ():DefaultTodo => useContext(GlobalContext);



const GlobalContextProvider: React.FC<{children: React.ReactNode}> = ({children}): React.ReactElement => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);
    useEffect(() => {
        console.log("Updated")
    }, [])
    const addTodo = (todo: ITodo): void => {
        console.log(todo, todos);
        setTodos(oldTodo => {
            let copy = [...oldTodo];
            copy.push(todo);
            return copy;
        })
    } 
    const removeTodo = (todoId: number): void => {
        console.log(todoId, todos);
        setTodos(oldTodo => {
            let copy = [...oldTodo];
            return copy.filter(t => t.id !== todoId);
        })
    } 
    return (
        <GlobalContext.Provider value={{todos, addTodo, removeTodo}}>
            {children}
        </GlobalContext.Provider>
    )
}



export default GlobalContextProvider;