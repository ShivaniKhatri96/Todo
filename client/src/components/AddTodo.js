import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import { InputLabel } from "@mui/material";
import { InputBox, Btn, Card1 } from "../styles/AddTodoStyles";
import { useState, useRef, useEffect, useContext } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TODO, UPDATE_TODO } from "../graphql/Mutation";
import { GET_TODO, GET_TODOS } from "../graphql/Query";
import { TodoContext } from "../TodoContext";
import moment from "moment";
const AddTodo = ({ show, setShow }) => {
  const moment = require("moment");
  const [updateTodo] = useMutation(UPDATE_TODO);
  //if clicked outside selectedId is turned to 0 => this results in emptying the addtodo form
  const { selectedId, setSelectedId } = useContext(TodoContext);
  const inputAreaRef = useRef();

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (!inputAreaRef.current.contains(e.target)) {
        //console.log("Outside input area");
        setSelectedId(0);
        setTodo({
          title: "",
          detail: "",
          date: "",
        });
      }
      //  else {
      //   console.log("Inside input area");
      // }
    };
    document.addEventListener("mousedown", checkIfClickedOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, []);

  // creating a todo state
  const [todo, setTodo] = useState({
    title: "",
    detail: "",
    date: "",
  });

  //after initializing selectedId, accessing it to get specific todo
  const { loading, error, data } = useQuery(GET_TODO, {
    variables: { id: selectedId },
    onCompleted: (data) => setTodo(data.getTodo),
  });

  //getting the name and values from the form using handleInputs handler
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    //key value pair
    setTodo({ ...todo, [name]: value });
  };

  //adding the todo in the database using mutation
  const [addTodo] = useMutation(ADD_TODO);
  const submitHandler = (e) => {
    e.preventDefault();
    //destructuring
    const { title, detail, date } = todo;
    // if title isn't present, form isn't submitted
    // backup option for "required" present in the form
    if (!title) {
      alert("Please enter a title");
    }
    //adding to the database
    if (selectedId === 0) {
      addTodo({
        variables: {
          title,
          detail,
          date,
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
    } else {
      //if selectedId has id of the id selected from todo list, we update it
      updateTodo({
        variables: {
          id: selectedId,
          title,
          detail,
          date,
        },
        refetchQueries: [{ query: GET_TODOS }],
      });
      setSelectedId(0);
    }
    //emptying the form after submitting and changing the state of show
    setTodo({
      title: "",
      detail: "",
      date: "",
    });
    setShow((s) => !s);
  };

  //onClick handler for "Add new task"(not"Add task"!!!) and "Cancel" button
  const clickHandler = (e) => {
    e.preventDefault();
    setShow((s) => !s);
    setTodo({
      title: "",
      detail: "",
      date: "",
    });
    //setting selectedId to 0 when cancel button is clicked
    setSelectedId(0);
  };
  return (
    <Card1 elevation={3}>
      <CardContent
        sx={{ display: { xs: show ? "block" : "none", md: "none" } }}
      >
        <Btn variant="contained" type="submit" onClick={clickHandler}>
          Add new task
        </Btn>
      </CardContent>
      <CardContent
        sx={{ display: { xs: show ? "none" : "block", md: "block" } }}
        ref={inputAreaRef}
      >
        <Grid
          container
          component="form"
          onSubmit={submitHandler}
          autoComplete="off"
        >
          <Grid item xs={12} sx={{ mb: 3 }}>
            <InputLabel htmlFor="title" sx={{ mb: 1 }}>
              Title
            </InputLabel>
            <InputBox
              id="title"
              name="title"
              value={todo.title}
              onChange={handleInputs}
              placeholder="Title of Todo"
              variant="outlined"
              //required means form won't get submitted until this field is filled
              required
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
              name="detail"
              value={todo.detail}
              onChange={handleInputs}
            ></InputBox>
          </Grid>
          <Grid item xs={12} sx={{ mb: 3 }}>
            <InputLabel htmlFor="date" sx={{ mb: 1 }}>
              Date
            </InputLabel>
            <InputBox
              id="date"
              type="date"
              variant="outlined"
              name="date"
              // value={todo.date}
              value={moment(todo.date).format('yyyy-MM-DD')}
              //(works while updating todo but) some problem is shown in console for date!
              onChange={handleInputs}
            >
            </InputBox>
          </Grid>
          <Grid item xs={5.75}>
            <Btn variant="outlined" type="submit" onClick={clickHandler}>
              Cancel
            </Btn>
          </Grid>
          <Grid item xs={0.5} />
          <Grid item xs={5.75}>
            <Btn variant="contained" type="submit">
              {selectedId === 0 ? "Add task" : "Update"}
              {/* Add task */}
            </Btn>
          </Grid>
        </Grid>
      </CardContent>
    </Card1>
  );
};
export default AddTodo;
