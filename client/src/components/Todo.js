import * as React from "react";
import { CardContent, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card2 } from "../styles/TodoStyles";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Moment from "react-moment";
import { useMutation } from "@apollo/client";
import { DELETE_TODO } from "../graphql/Mutation";
import { GET_TODOS } from "../graphql/Query";
import { TodoContext } from "../TodoContext";
import { useContext } from "react";
const Todo = ({ id, title, detail, date, setShow }) => {
  const {selectedId, setSelectedId} = useContext(TodoContext);
  // deleting todo
  const [deleteTodo] = useMutation(DELETE_TODO);
  const deleteHandler = (id) => {
    deleteTodo({
      variables: {
        id: id
      },
      refetchQueries: [
        { query: GET_TODOS }
      ]
    });
  };
  //() => setSelectedId(id)
  const onClickTodo = (e) => {
e.preventDefault();
setSelectedId(id);
setShow(!setShow);
  }
  return (
    <Card2 elevation={3} >
      <CardContent onClick={onClickTodo} className="cursor" >
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ pl: "15px" }}
          >
            {title} 
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="div"
            color="text.secondary"
          >
            <Moment format="DD/MM/YYYY">{date}</Moment>
          </Typography>
        </Grid>
        <Typography variant="body2" color="text.secondary">
          {detail}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton aria-label="delete" onClick={() => deleteHandler(id)} >
          <DeleteOutlineIcon />
        </IconButton>
      </CardActions>
    </Card2>
  );
};
export default Todo;
