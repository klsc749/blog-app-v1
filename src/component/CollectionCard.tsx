import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { styled} from "@mui/material";

export interface CollectionCardProps {
    collectionName: string;
    coverUrl?: string;
}

const defaultCoverUrl = "http://rtdc06iu9.hb-bkt.clouddn.com/6b8e4338-da31-4154-af8b-00ce1d142909?imageView2/0/format/webp/q/20";

const StyledCard = styled(Card)(({ theme }) => ({
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


const StyledCardMedia = styled(CardMedia)({
    height: "100%",
});

const StyledCardContent = styled(CardContent)(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: theme.spacing(2),
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
}));

function CollectionCard({ collectionName, coverUrl }: CollectionCardProps) {
    function clickHandler() {
        //TODO: Navigate to collection page
        console.log("click: " + collectionName);
    }
    return (
        <StyledCard onClick={clickHandler}>
            <StyledCardMedia
                image={coverUrl || defaultCoverUrl}
            />
            <StyledCardContent>
                <Typography color={"whitesmoke"} variant="h6">{collectionName}</Typography>
            </StyledCardContent>
        </StyledCard>
    );
}

export default CollectionCard;
