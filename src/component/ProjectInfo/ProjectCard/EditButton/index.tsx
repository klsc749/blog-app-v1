import {Box, IconButton, styled} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import {useState} from "react";
import BaseSnackAlert from "../../../SnackAlert";

const StyledEditButton = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    backgroundColor: "rgba(76, 175, 80, 0.8)",
    color: "white",
    "&:hover": {
        backgroundColor: "rgba(76, 175, 80, 1)",
    },
}));


function EditButton(){
    const [successSnackOpen, setSuccessSnackOpen] = useState(false);
    const [errorSnackOpen, setErrorSnackOpen] = useState(false);
    function editClickHandler(event: React.MouseEvent<HTMLButtonElement>){
        event.stopPropagation();
        console.log("edit click");
        setSuccessSnackOpen(true)
        //TODO: edit
    }
    return(
        <Box>
            {successSnackOpen && SuccessEditAlert({open: successSnackOpen, handleClose: () => setSuccessSnackOpen(false)})}
            {errorSnackOpen && ErrorEditAlert({open: errorSnackOpen, handleClose: () => setErrorSnackOpen(false)})}
            <StyledEditButton onClick={editClickHandler}>
                <EditIcon />
            </StyledEditButton>
        </Box>
    )
}

function SuccessEditAlert(props: {open: boolean, handleClose: () => void}){
    return(
        <BaseSnackAlert open={props.open} severity={"success"} message={"修改成功"} handleClose={props.handleClose}/>
    )
}

function ErrorEditAlert(props: {open: boolean, handleClose: () => void}){
    return(
        <BaseSnackAlert open={props.open} severity={"error"} message={"修改失败"} handleClose={props.handleClose}/>
    )
}

export default EditButton