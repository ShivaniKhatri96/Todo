import * as React from "react";
import { CardContent, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card2 } from "../styles/TodoStyles";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { GET_TODOS } from "../graphql/Query";
import { useQuery } from "@apollo/client";
const Todo = () => {
  const { loading, error, data } = useQuery(GET_TODOS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  // console.log(data);
  const todos = data.getTodos;
  // console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Card2 elevation={3} key={todo.id}>
          <CardContent>
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
                {todo.title}
              </Typography>
              <Typography
                gutterBottom
                variant="body1"
                component="div"
                color="text.secondary"
              >
                {todo.date}
              </Typography>
            </Grid>
            <Typography variant="body2" color="text.secondary">
              {todo.detail}
            </Typography>
          </CardContent>
          <CardActions sx={{ display: "flex", justifyContent: "end" }}>
            <IconButton aria-label="delete">
              <DeleteOutlineIcon />
            </IconButton>
          </CardActions>
        </Card2>
      ))}
    </div>
  );
};
export default Todo;
