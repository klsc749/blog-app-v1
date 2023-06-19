import {Box, IconButton, styled} from "@mui/material";
import BaseSnackAlert from "../../../SnackAlert";
import {useState} from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledDeleteButton = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(1),
    backgroundColor: "rgba(244, 67, 54, 0.8)",
    color: "white",
    "&:hover": {
        backgroundColor: "rgba(244, 67, 54, 1)",
    },
}));

function DeleteButton(){
    const [successSnackOpen, setSuccessSnackOpen] = useState(false);
    const [errorSnackOpen, setErrorSnackOpen] = useState(false);

    function deleteClickHandler(event: React.MouseEvent<HTMLButtonElement>){
        event.preventDefault();
        console.log("delete click");
        setSuccessSnackOpen(true)
    }

    return(
        <Box>
            {successSnackOpen && SuccessDeleteAlert({open: successSnackOpen, handleClose: () => setSuccessSnackOpen(false)})}
            {errorSnackOpen && ErrorDeleteAlert({open: errorSnackOpen, handleClose: () => setErrorSnackOpen(false)})}
            <StyledDeleteButton onClick={deleteClickHandler}>
                <DeleteIcon/>
            </StyledDeleteButton>
        </Box>
    )
}

function SuccessDeleteAlert(props: {open: boolean, handleClose: () => void}){
    return(
        <BaseSnackAlert open={props.open} severity={"success"} message={"删除成功"} handleClose={props.handleClose}/>
    )
}

function ErrorDeleteAlert(props: {open: boolean, handleClose: () => void}){
    return(
        <BaseSnackAlert open={props.open} severity={"error"} message={"删除失败"} handleClose={props.handleClose}/>
    )
}

export default DeleteButton;
