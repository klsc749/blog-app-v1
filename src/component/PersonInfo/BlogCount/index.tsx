import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BlogServiceApi from "../../../service/visitor/BlogApi";

function BlogCount() {
    const [blogNum, setBlogNum] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {getBlogNum();}, []);

    function getBlogNum() {
        BlogServiceApi.getBlogNum().then((res) => {
            if (res && res.code === 200) {
                setBlogNum(res.data);
            }
            setIsLoading(false);
        });
    }


    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                文章
            </Typography>
            {
                isLoading ? (
                    <Skeleton variant="text" width={50} />
                ) : (
                    <Typography variant="body1">{blogNum}</Typography>
                )
            }
        </Box>
    );
}

export default BlogCount;