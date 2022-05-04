import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
//import { EditTodo } from "./MyComponents/EditTodo";

//import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import { About } from "./MyComponents/About";
import { EditTodo } from "./MyComponents/EditTodo";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length == 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;
    }
    const mytodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, mytodo]);
  };
  

  const [todos, setTodos] = useState([initTodo]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header title="my todos list" />

      <AddTodo AddTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <EditTodo EditTodo={EditTodo}/>
    </>
  );
}

export default App;
