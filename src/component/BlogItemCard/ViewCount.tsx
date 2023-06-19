import { Box, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface ViewCountProps {
    viewCount: number;
}

function ViewCount({ viewCount }: ViewCountProps) {
    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: 0.5,
            }}
        >
            <VisibilityIcon sx={{ fontSize: "1.2rem", color: "text.secondary" }} />
            <Typography variant="subtitle2" align="right" color="text.secondary">
                {viewCount}
            </Typography>
        </Box>
    );
}

export default ViewCount;
