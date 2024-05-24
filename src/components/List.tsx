import React, { useEffect, useState } from "react";
import { IList } from './type';
  
  interface ToDoListProps {
    textList: IList[];
    deleteText: (id: string) => void;
  }

const List:React.FC<ToDoListProps> = ({textList,deleteText}) => {
    
    const[todos,setTodos] = useState(textList)
  
    useEffect(() =>{
        setTodos(textList);
    },[textList])


    return ( <div>
     {todos?.map(todo => <div className=" bg-gray-100 text-left text-xl mt-2 p-1 font-sans w-10/12 rounded-md" key={todo.id}>{todo.text}
         <button onClick={() => deleteText(todo.id)} className="float-right bg-red-700 hover:bg-red-900  text-white rounded-full font-bold">X</button></div>)}
    </div> );
}
 
export default List;