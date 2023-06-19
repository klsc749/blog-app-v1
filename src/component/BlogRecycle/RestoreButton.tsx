import RestoreIcon from '@mui/icons-material/Restore';
import {IconButton} from "@mui/material";

interface RestoreButtonProps {
    handleEditClick: () => void;
}

function RestoreButton({handleEditClick}:RestoreButtonProps){
    return(
        <IconButton
            edge="end"
            aria-label="edit"
            color="primary"
            onClick={handleEditClick}
            sx={{ mr: 1 }}
        >
            <RestoreIcon />
        </IconButton>
    )
}

export default RestoreButton;