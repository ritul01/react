import { createContext,useContext } from "react";

export const Context=createContext({
    todos:[
        {
            id:1,
            todo:"Todo Message",
            completed:false
        }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(Context)
}
export const TodoProvider=Context.Provider