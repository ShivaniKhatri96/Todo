import * as React from "react";
import { CardContent, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Card2 } from "../styles/TodoStyles";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Todo = () => {
  return (
      <Card2 elevation={3}>
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
              Title
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              component="div"
              color="text.secondary"
            >
              Date
            </Typography>
          </Grid>
          <Typography variant="body2" color="text.secondary">
            Detail..bla bla bla
          </Typography>
        </CardContent>
        <CardActions sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton aria-label="delete">
            <DeleteOutlineIcon />
          </IconButton>
        </CardActions>
      </Card2>
  );
};
export default Todo;
