import BlogItem from "../../model/admin/BlogItem";
import React from "react";
import {Box, Grid,  Typography} from "@mui/material";
import {root} from "./BlogItemCardCommon";
import {useNavigate} from "react-router-dom";
import Visibility from "./Visibility";
import TagGroup from "../Tag/TagGroup";
import ViewCount from "./ViewCount";


interface AdminBlogItemCardProps {
    blogItem: BlogItem
}

function AdminBlogItemCard({blogItem}: AdminBlogItemCardProps){
    const navigate = useNavigate()
    function handleOnClick(){
        navigate('/blog/' + blogItem.id);
    }

    return (
        <Box sx={root} onClick={handleOnClick}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" textAlign={"center"}>
                        {blogItem.title}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>{blogItem.contentAbstract}</Typography>
                </Grid>
                <Grid item container xs={12} alignItems="center">
                    <Grid item xs={6}>
                        <TagGroup tags={blogItem.tags} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant="subtitle2"
                                    align="right"
                                    sx={{
                                            color: "text.secondary",
                                            fontStyle: "italic",
                                        }}>
                            {new Date(blogItem.date).toLocaleDateString()}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Typography variant="subtitle2">
                        Category: {blogItem.category}
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <ViewCount viewCount={blogItem.viewCount}/>
                </Grid>
                <Grid item xs={4}>
                    <Visibility isPrivate={blogItem.visibility} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AdminBlogItemCard;