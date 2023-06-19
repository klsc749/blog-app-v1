import { TableRow, TableCell, IconButton } from "@mui/material";
import Project from "../../../../model/visitor/Project";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ProjectApi from "../../../../service/admin/ProjectApi";
import { useState } from "react";
import SaveProjectDialog from "../../SaveProjectDialog";

interface ProjectManageItemProps{
    project : Project;
}

function ProjectManageItem({project} : ProjectManageItemProps){

    return(
        <TableRow>
            <TableCell>{project.name}</TableCell>
            <TableCell>{project.description} </TableCell>
            <TableCell>{project.url} </TableCell>
            <TableCell>{project.imageURL}</TableCell>
            <TableCell>
                {EditButton(project)}
                {DeleteButton(project.id)}
            </TableCell>
        </TableRow>
    )
}

function DeleteButton(id : string){

    function handleDeleteClick(){
        ProjectApi.deleteProject(id).then(()=>{
            window.location.reload();
        })
    }

    return(
        <IconButton
            edge="end"
            aria-label="delete"
            color="error"
            onClick={handleDeleteClick}
        >
            <DeleteIcon />
        </IconButton>
    )
}

function EditButton(project : Project){
    const [open, setOpen] = useState(false);

    function onClose(){
        setOpen(false);
    }

    return(
        <>
            <SaveProjectDialog project={project} open={open} onClose={onClose}/>
            <IconButton>
                <EditIcon onClick={()=>{setOpen(true)}}/>
            </IconButton>
        </>
    )
}

export default ProjectManageItem;