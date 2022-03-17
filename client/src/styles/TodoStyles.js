import {styled } from "@mui/material/styles";
import { Card} from "@mui/material";

export const Card2 = styled(Card)(({theme}) => ({
    minWidth: 300,
    marginBottom: theme.spacing(1),
    [theme.breakpoints.up("xs")]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3)
    },
    [theme.breakpoints.up("md")]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    [theme.breakpoints.up("xl")]: {
        marginLeft: theme.spacing(10),
        marginRight: theme.spacing(10)
    },
}))