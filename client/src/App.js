import * as React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import Grid from "@mui/material/Grid";
import { GET_TODOS } from "./graphql/Query";
import { useMutation, useQuery } from "@apollo/client";
import { TodoContext } from "./TodoContext";
import { useState } from "react";
function App() {
  const [show, setShow] = useState(true);
  //initial selectedId set to zero
  const [selectedId, setSelectedId] = useState(0);
  //getting todos
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    // selecting id of todo with todocontext
    <TodoContext.Provider value={{selectedId, setSelectedId}}>
      <div>
        <h1 id="heading">Todo App</h1>
        <Grid container>
          <Grid item xs={12} md={4}>
            <AddTodo show={show} setShow={setShow}/>
          </Grid>
          <Grid item xs={12} md={8}>
            {/* getting todos */}
            {data.getTodos.map((todo) => (
              <Todo
                key={todo.id}
                id={todo.id}
                title={todo.title}
                detail={todo.detail}
                date={todo.date}
                setShow={setShow}
              />
            ))}
          </Grid>
        </Grid>
      </div>
    </TodoContext.Provider>
  );
}
export default App;
