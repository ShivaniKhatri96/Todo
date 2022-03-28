import * as React from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div>
      <h1 id="heading">Todo App</h1>
      <Grid container>
        <Grid item xs={12} md={4}>
          <AddTodo />
        </Grid>
        <Grid item xs={12} md={8}>
          <Todo />
        </Grid>
      </Grid>
    </div>
  );
}
export default App;
