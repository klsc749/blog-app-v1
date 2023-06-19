import { Chip } from "@mui/material";
import React from "react";

interface TagProps {
    tagName: string;
}

function Tag(props: TagProps) {
    function handleClick(event: React.MouseEvent<HTMLDivElement>) {
        //TODO: redirect to tag page
        event.stopPropagation();
    }
    return (
        <Chip
            label={props.tagName}
            variant="outlined"
            size="small"
            clickable={true}
            onClick={handleClick}
            sx={{
                marginRight: "4px",
                marginBottom: "4px",
                borderColor: "primary.main",
                color: "primary.main",
                "&:hover": {
                    backgroundColor: "primary.dark",
                    color: "black",
                },
            }}
        />
    );
}

export default Tag;
