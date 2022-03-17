import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { InputLabel } from "@mui/material";
import {InputBox, Btn, Card1} from "../styles/AddTodoStyles";

const AddTodo = () => {
  return (
    <Card1 elevation={3} >
      <CardContent>
        <Grid
          container
          sx={{ mx: "auto" }}
          xs={12}
          component="form"
          //   onSubmit={submitHandler}
          autoComplete="off"
        >
          <Grid xs={12} sx={{mb:3}}>
            <InputLabel htmlFor="title" sx={{ mb: 1 }}>
              Title
            </InputLabel>
            <InputBox
              id="title"
              placeholder="Title of Todo"
              variant="outlined"
            ></InputBox>
          </Grid>
          <Grid xs={12} sx={{mb:3}}>
            <InputLabel htmlFor="detail" sx={{ mb: 1 }}>
              Detail
            </InputLabel>
            <InputBox
              id="detail"
              placeholder="Detail of Todo item"
              variant="outlined"
            ></InputBox>
          </Grid>
          <Grid xs={12} sx={{mb:3}}>
            <InputLabel htmlFor="date" sx={{ mb: 1 }}>
              Date
            </InputLabel>
            <InputBox id="date" type="date" variant="outlined"></InputBox>
          </Grid>
          <Grid xs={12}>
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
