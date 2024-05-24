import React, { useRef, createRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import List from './List';
import { IList } from './type';


const TodoList = () => {

      const [todos,setTodos] = useState<IList[]>([]);

        const inputRef = useRef<HTMLInputElement>(null);
        // const inputRef = createRef<HTMLInputElement>();
        function addList () {
         const text =  inputRef.current?.value || "";
         if(text !== ''){
            const newTodo = { id: uuidv4(), text };
            setTodos((prevTodos) => [...prevTodos, newTodo]);
         }
         
         inputRef.current!.value = '';
       
        }

        const deleteText = (id: string) => {
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        };

    return ( <div>
        <h1>Todo App</h1>
        <input ref={inputRef}
   type="text" className="mt-11 p-2 rounded-md w-3/4"/>
          <button onClick={addList} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md">Add</button>
          <List textList={todos} deleteText={deleteText}/>
    </div> );
}
 
export default TodoList;