import {styled } from "@mui/material/styles";
import {Button, TextField, Card} from "@mui/material";
export const InputBox = styled(TextField)`
width: 100%;
`
export const Btn = styled(Button)`
width: 100%;
height: 50px;
boxShadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`

export const Card1 = styled(Card)(({theme}) => ({
    minWidth: 275,
    backgroundColor: "#EFFFFD",
    marginBottom: theme.spacing(2),
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