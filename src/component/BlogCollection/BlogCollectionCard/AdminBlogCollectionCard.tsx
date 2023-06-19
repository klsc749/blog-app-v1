import {MouseEvent, useState} from "react";
import {IconButton, styled, Typography} from "@mui/material";
import {
    BlogCollectionCardProps,
    defaultCoverUrl,
    StyledCard,
    StyledCardContent,
    StyledCardMedia
} from "./BlogCollectionCardCommon";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import BlogCollectionEditor from "./BlogCollectionEditor/BlogCollectionEditor";
import BlogCategoryApi from "../../../service/admin/BlogCategoryApi";

const EditButton = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
    backgroundColor: "rgba(76, 175, 80, 0.8)",
    color: "white",
    "&:hover": {
        backgroundColor: "rgba(76, 175, 80, 1)",
    },
}));

const DeleteButton = styled(IconButton)(({theme}) => ({
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(1),
    backgroundColor: "rgba(244, 67, 54, 0.8)",
    color: "white",
    "&:hover": {
        backgroundColor: "rgba(244, 67, 54, 1)",
    },
}));

function AdminBlogCollectionCard({blogCollection}: BlogCollectionCardProps) {
    const [showButtons, setShowButtons] = useState(false);
    const [open, setOpen] = useState(false);
    function clickHandler(event:  MouseEvent<HTMLDivElement, globalThis.MouseEvent>) {
        event.stopPropagation();
        console.log("click: " + blogCollection.id);
    }
    function editClickHandler(event: React.MouseEvent<HTMLButtonElement>){
        event.stopPropagation();
        setOpen(true)
    }

    function deleteClickHandler(event: React.MouseEvent<HTMLButtonElement>){
        event.stopPropagation();
        BlogCategoryApi.deleteCategory(blogCollection.id).then((response) => {
            if(response?.code === 200){
                console.log("delete success");
            }else{
                console.log("delete failed");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <StyledCard
            onClick={(event) => clickHandler(event)}
            onMouseEnter={() => setShowButtons(true)}
            onMouseLeave={() => setShowButtons(false)}
        >
            <BlogCollectionEditor open={open} blogCollection={blogCollection} onClose={()=>{setOpen(false)}}/>
            {showButtons && (
                <>
                    <EditButton onClick={editClickHandler}>
                        <EditIcon />
                    </EditButton>
                    <DeleteButton  onClick={deleteClickHandler}>
                        <DeleteIcon />
                    </DeleteButton>
                </>
            )}
            <StyledCardMedia image={blogCollection.cover || defaultCoverUrl} />
            <StyledCardContent>
                <Typography color={"whitesmoke"} variant="h6">
                    {blogCollection.title}
                </Typography>
            </StyledCardContent>
        </StyledCard>
    );
}

export default AdminBlogCollectionCard;