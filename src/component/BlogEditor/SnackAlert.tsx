import {Alert, Snackbar} from "@mui/material";
import React from "react";

export function SuccessSaveTip({ open, handleClose }: { open: boolean; handleClose?: () => void }){
    return(
        <BaseSnackAlert open={open} severity={"success"} message={"Saved!"} handleClose={handleClose}/>
    )
}

export function ErrorSaveTip({ open, handleClose }: { open: boolean; handleClose?: () => void }){
    return(
        <BaseSnackAlert open={open} severity={"error"} message={"Failed to save!"} handleClose={handleClose}/>
    )
}

export function SuccessPublishTip({ open, handleClose }: { open: boolean; handleClose?: () => void }){
    return(
        <BaseSnackAlert open={open} severity={"success"} message={"Published!"}  handleClose={handleClose}/>
    )
}

export function ErrorPublishTip({ open, handleClose }: { open: boolean; handleClose?: () => void }){
    return(
        <BaseSnackAlert open={open} severity={"error"} message={"Failed to publish!"} handleClose={handleClose}/>
    )
}

function BaseSnackAlert(props: { open: boolean, severity: "success" | "error",
    message: string, handleClose?: () => void }) {
    return (
        <Snackbar open={props.open} autoHideDuration={6000} onClose={props.handleClose}>
            <Alert severity={props.severity} sx={{width: '100%'}}>
                {props.message}
            </Alert>
        </Snackbar>
    )
}