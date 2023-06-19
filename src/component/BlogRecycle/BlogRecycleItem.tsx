import {useNavigate} from "react-router-dom";
import blogApi from "../../service/admin/BlogApi";
import {IconButton, TableCell, TableRow} from "@mui/material";
import TagGroup from "../Tag/TagGroup";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreButton from "./RestoreButton";

export interface BlogRecycleItemProps {
    id: string;
    title: string;
    category: string;
    tags : string[];
    publishDate: string;
}

function BlogRecycleItem({ id, title, category, tags,publishDate }: BlogRecycleItemProps) {
    const navigate = useNavigate()

    const handleDeleteClick = () => {
        blogApi.hardDeleteBlogByid(id).then(
            () => {
                window.location.reload()
            }
        )
    };

    const handleRestoreClick = () => {
        blogApi.restoreBlogByid(id).then(
            () => {
                window.location.reload()
            }
        )
    }

    return (
        <TableRow>
            <TableCell>{title ? title : "无标题"}</TableCell>
            <TableCell>{category ? category : "无分类"} </TableCell>
            <TableCell> <TagGroup tags={tags}/> </TableCell>
            <TableCell>{new Date(publishDate).toLocaleDateString()}</TableCell>
            <TableCell>
                <RestoreButton handleEditClick={handleRestoreClick}/>
                <IconButton
                    edge="end"
                    aria-label="delete"
                    color="error"
                    onClick={handleDeleteClick}
                >
                    <DeleteIcon />
                </IconButton>
            </TableCell>
        </TableRow>
    );
}

export default BlogRecycleItem;
