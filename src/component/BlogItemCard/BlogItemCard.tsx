import {Box, Chip, Grid, Paper, Typography} from "@mui/material";
import {BlogItem} from "../../model/visitor/BlogItem";
import Tag from "../Tag/Tag";
import {useNavigate} from "react-router-dom";
import {root} from "./BlogItemCardCommon";
import TagGroup from "../Tag/TagGroup";
import ViewCount from "./ViewCount";

interface BlogItemCardProps {
    blogItem: BlogItem
}

function BlogItemCard({blogItem}: BlogItemCardProps){
    const navigate = useNavigate()
    function handleOnClick(){
        navigate('/blog/' + blogItem.id);
    }

    return(
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
                        <Typography variant="subtitle2" align="right">
                            {new Date(blogItem.date).toLocaleDateString()}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Typography variant="subtitle2">Category: {blogItem.category}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <ViewCount viewCount={blogItem.viewCount}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default BlogItemCard;