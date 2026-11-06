
import { useState } from "react"

export default function ToDoInput() {
    const [todo, setTodo] = useState("");
    const [toDoList, setToDoList] = useState([])
    function addToDo(event){
        // setTodo(event.target.value)
        event.preventDefault()
        console.log(todo)
        //spread the array?
        setToDoList([...toDoList, todo])
        
       

    }
    function deleteItem(){
        
    }
    return (
        <div>
            <h1>To Do App</h1>
            <form>
                {/* onChange ={(event) => setTodo(event.target.value)} */}
                <input type="text" onChange ={(event) => setTodo(event.target.value)}></input>
                <button>Switch to Light</button>
                <button onClick = {addToDo} >Add To Do</button>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
                
            </form>
            {/* //array.map(item that iterates over array) =>  thing you want to make? */}
            <ul>    {
                    toDoList.map(item => 

                 
                    <li>
                      {item}
                      <img src = "https://www.trashcanswarehouse.com/assets/images/product-photos/witt/wcd32cl.jpg" width = "25px"/>
                      <img onClick = {deleteItem} src = "https://png.pngtree.com/png-clipart/20250623/original/pngtree-pencil-with-orange-body-png-image_21226753.png" width = "25px" />

                    </li>
                       )
                }
                </ul>
        </div>
    )
}