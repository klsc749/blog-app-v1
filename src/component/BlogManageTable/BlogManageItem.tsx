import { TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TagGroup from "../Tag/TagGroup";
import {useNavigate} from "react-router-dom";
import blogApi from "../../service/admin/BlogApi";

export interface BlogManageItemProps {
    id: string;
    title: string;
    category: string;
    tags : string[];
    publishDate: string;
}

function BlogManageItem({ id, title, category, tags,publishDate }: BlogManageItemProps) {
    const navigate = useNavigate()
    const handleEditClick = () => {
        navigate("/admin/editBlog/" + id)
    };

    const handleDeleteClick = () => {
        blogApi.softDeleteBlogByid(id).then(

        )
    };

    return (
        <TableRow>
            <TableCell>{title}</TableCell>
            <TableCell>{category}</TableCell>
            <TableCell> <TagGroup tags={tags}/> </TableCell>
            <TableCell>{new Date(publishDate).toLocaleDateString()}</TableCell>
            <TableCell>
                <IconButton
                    edge="end"
                    aria-label="edit"
                    color="primary"
                    onClick={handleEditClick}
                    sx={{ mr: 1 }}
                >
                    <EditIcon />
                </IconButton>
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

export default BlogManageItem;
