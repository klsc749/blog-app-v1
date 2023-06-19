import { Typography } from "@mui/material";
import {
    BlogCollectionCardProps,
    defaultCoverUrl,
    StyledCard,
    StyledCardContent,
    StyledCardMedia
} from "./BlogCollectionCardCommon";
import {useNavigate} from "react-router-dom";


function BlogCollectionCard({blogCollection} : BlogCollectionCardProps){
    const navigate = useNavigate();
    function clickHandler() {
        const encodedTitle = encodeURIComponent(blogCollection.title);
        navigate(`/category/${encodedTitle}`);
    }
    return (
        <StyledCard onClick={clickHandler}>
            <StyledCardMedia
                image={blogCollection.cover || defaultCoverUrl}
            />
            <StyledCardContent>
                <Typography color={"whitesmoke"} variant="h6">{blogCollection.title}</Typography>
            </StyledCardContent>
        </StyledCard>
    );
}

export default BlogCollectionCard;