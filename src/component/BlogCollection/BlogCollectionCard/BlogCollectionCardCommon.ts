import {Card, CardContent, CardMedia, styled} from "@mui/material";
import BlogCollection from "../../../model/visitor/BlogCollection";

export const StyledCard = styled(Card)(({ theme }) => ({
    position: "relative",
    overflow: "hidden",
    borderRadius: theme.spacing(2),
    height: 200,
    transition: "transform 0.3s",
    "&:hover": {
        transform: "scale(1.05)",
        cursor: "pointer",
    },
}));


export const StyledCardMedia = styled(CardMedia)({
    height: "100%",
});

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(2),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
}));

export interface BlogCollectionCardProps{
    blogCollection : BlogCollection;
}

export const defaultCoverUrl = "https://images.kslc.tech/6b8e4338-da31-4154-af8b-00ce1d142909?imageView2/0/format/webp/q/20";
