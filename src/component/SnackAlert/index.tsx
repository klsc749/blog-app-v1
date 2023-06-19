import {Alert, Snackbar} from "@mui/material";
import React from "react";

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
export default BaseSnackAlert;
