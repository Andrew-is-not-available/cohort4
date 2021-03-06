/* ACTUAL LINKEDLIST FILE */

/* IMPORTANT: 

If you try to update the state within the same app,
add: const [counter, setCounter] = useState(0);
in order to auto-update! (For debugging only.)
*/

import React, { useState } from "react";
import LinkedList from "./LLPoJo.js";
import "../../App.css";

// let node = new LinkedList.Node('k1',120,"Lets learn React");
// let todoLinkedList = new LinkedList.DoublyLinkedList();
// todoLinkedList.appendAt(0,30, "Going for a walk");
/*  TODO:

June 26:
- Fix display so it works properly
- Put current pointer into the state 
- Add "remove" and "append" button functionality
- Add newNode and currentNode components
- Add button component

June 29:
- Figure out setState for Time and Task.
-> In order to grab Time and Task from User in <input>
- Figure out how to get variable 'id' from User to delete task.
- Modularize into separate functions.
-> 1) LinkedListForm
-> 2) CurrentList
-> 3) App
- Display array from displayNode();
Note: Do not use <form>

June 30:
website key warnings are resolved
*/

function LinkedListForm({ onSaveNode,todoLinkedList }) {
  // Initial State
  const [task, setTask] = useState("");
  const [time, setTime] = useState(0);
  const [id, setID] = useState("");
  // const [account, setAccount] = useState("");


  // const handleSubmit = e => {
  //   // preventDefault() prohibits default HTML
  //   // form functions to break React.
  //   e.preventDefault();
  //   if ((!value)) return;
  //   // if ((!time)) return;
  //   addTodo(value);
  //   setValue("");
  //   setTime(0);
  // };

  const onClick = (e) => {
    const todo = e.target.getAttribute("todo");
    if (todo) {
      console.log(todo);

      // setOperate({ todo: todo });
      if (todo === "save") {
        // Add functionality here.
        // handleSubmit(todo);
        onSaveNode(time, task);
        // Show(todoLinkedList);
        // setTodoLinkedList(time, task);
        // Update the state of the list
        // whenever the button is pressed.
        console.log("Do Save Stuff");
      } else if (todo === "delete") {
        console.log("Do Delete Stuff");
      }
      // else if (todo === 'next') {
      //     this.pipeLine.next();
      // } else if (todo === 'prev') {
      //     this.pipeLine.prev();
      // }
    }
  };

  return (
    <div onClick={onClick}>
      <input
        type="text"
        className="input"
        time={time}
        placeholder="Enter estimated minutes here."
        onChange={(e) => setTime(e.target.value)}
      />
      <input
        type="text"
        className="input"
        task={task}
        placeholder="Enter your task here."
        onChange={(e) => setTask(e.target.value)}
      />
      <button todo="save">Create New Task</button>
      {/* <Show/> */}
    </div>
  );
}
// function Show(node){
//   const currentTask=todoLinkedList.get()
//   return (
//     <div>
//     <h3>{currentTask} </h3>
//     </div>
//   )
// }

function CurrentList (id, task, time) {
  return (
    
    <div className="todo" /* style={{ textDecoration: todo.isCompleted ? "line-through" : "" }} */>
      {/* {this.task}

      {this.time} */}

      <div>
       <h1> Inside the CurrentList Component! </h1>
       <h3>{this.task}Estimated Time: {this.time}</h3> 
        {/* <button onClick={() => completeTodo(index)}>Complete</button>
            <button onClick={() => removeTodo(index)}>x</button>
        <button onClick={() => appendTodo(index)}>+</button> */}
      </div>
    </div>
  );
}

function App() {
  // For debugging only.
  const [counter, setCounter] = useState(0);
  // Initalizes the functions of the DoublyLinkedList object.

  // Will currently noit update the state, since it's
  // within the app itself.
  const [todoLinkedList, setTodoLinkedList] = useState(
    new LinkedList.DoublyLinkedList()
    
  );

  // const [operate, setOperate] = useState({ todo: "" });

  // Called "Save" even though it uses Append.
  const onSaveNode = (task, time) => {
  
    todoLinkedList.append(task, time);
    // const newNode= new LinkedList.Node (newID,task,time);
    // const newLL=todoLinkedList.push(newNode);

    setTodoLinkedList(todoLinkedList);
    // This counter is set in state and used to override React's default override
    setCounter(counter+1);
    console.log("V2", counter);
    console.log("In the onSaveNode function.",todoLinkedList.get());
    
    
    // return(
    //   <div>
    // Functioning List Display (Requires Icon-click):
    // <h2>List of To-dos from Savenode:</h2>
    // <span>
    //   <ol>
      
    //     {todoLinkedList.display().map((task,index) => (
    //       <li key= {index}> 
    //           {task.todo}
    //           </li>
    //     ))}

    //   </ol>
    // </span> 
    // </div>
    // )
    
  };
// const Show = () =>{
//     const currentTask=todoLinkedList.get()
//     return (
//       <div>
//       <h3>{currentTask} </h3>
//       </div>
//     )
//   }

  // How do display?
  const DisplayNode = () => {
    // State Problem?
    // Yeah, State Problem.

    console.log("In the displayNode function.");

    const display = todoLinkedList.display();
    console.log(display);
    console.log(todoLinkedList.display());
    return display;
  };

  const removeNode = (id) => {
    // Get ID (position) from User, how?
    todoLinkedList.remove(id);
    todoLinkedList.remove("k1");

    console.log(todoLinkedList);
  };

  const displayLengthNode = () => {
    // onSaveNode(task, time);
    console.log("In the onSaveNode function.");

    let amount = todoLinkedList.length();

    console.log(amount);
  };

  return (
    <div>
      <div>
        
        Functioning List Display (Requires Icon-click):
        <h2>List of To-dos:</h2>
        <span>
          <ol>
          
            {todoLinkedList.display().map((task) => (
              <li> {task}
              </li>
            ))}
          </ol>
        </span> 

        
        <p> Next: { todoLinkedList.nextNode() }</p>
        <p> Current: { todoLinkedList.get() } </p>
        <p> Previous: { todoLinkedList.prevNode() } </p>
        {/* {todoLinkedList.map} */}
        {/* {todoLinkedList.display().map((id,task,time) => (
        <CurrentList 
            key={id}
            id={id}
            task={task}
            time={time}

        />
        ))}
         */}

        <LinkedListForm onSaveNode={onSaveNode} />
        <button>Next Task</button>
        <button>Previous Task</button>
        <button onClick={() => DisplayNode()}>Display Tasks</button>
        <button onClick={() => removeNode()}>Remove Task</button>
        <button onClick={() => displayLengthNode()}>Display # of Tasks</button>
      </div>
    </div>
  );
}

export default App;
