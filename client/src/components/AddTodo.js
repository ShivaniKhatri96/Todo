import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { InputLabel } from "@mui/material";
import { InputBox, Btn, Card1 } from "../styles/AddTodoStyles";
import { useState } from "react";
const AddTodo = () => {
  const [show, setShow] = useState(true);
  // console.log(show);
  const clickHandler = (e) => {
    e.preventDefault();
    setShow((s) => !s);
  };
  return (
    <Card1 elevation={3}>
      <CardContent sx={{ display: {xs: show ? "block" : "none", md:"none"} }}>
        <Btn
          variant="contained"
          type="submit"
          onClick={clickHandler}
        >
          Add new task
        </Btn>
      </CardContent>
      <CardContent sx={{ display: {xs: show ? "none" : "block", md:"block"} }}>
        <Grid
          container
          component="form"
          //   onSubmit={submitHandler}
          autoComplete="off"
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <InputLabel htmlFor="title" sx={{ mb: 1 }}>
              Title
            </InputLabel>
            <InputBox
              id="title"
              placeholder="Title of Todo"
              variant="outlined"
            ></InputBox>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <InputLabel htmlFor="detail" sx={{ mb: 1 }}>
              Detail
            </InputLabel>
            <InputBox
              id="detail"
              placeholder="Detail of Todo item"
              variant="outlined"
            ></InputBox>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <InputLabel htmlFor="date" sx={{ mb: 1 }}>
              Date
            </InputLabel>
            <InputBox id="date" type="date" variant="outlined"></InputBox>
          </Grid>
          <Grid item xs={5.75}>
            <Btn variant="outlined" type="submit" onClick={clickHandler}>
              Cancel
            </Btn>
          </Grid>
          <Grid item xs={0.5} />
          <Grid item xs={5.75}>
            <Btn variant="contained" type="submit">
              Add task
            </Btn>
          </Grid>
        </Grid>
      </CardContent>
    </Card1>
  );
};
export default AddTodo;
