import { Box, Skeleton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import VisitorBlogCategoryApi from "../../../service/visitor/VisitorBlogCategoryApi";

function CategoryCount() {
    const [categoryCount, setCategoryCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => { fectchCategoryCount(); }, []);
    
    function fectchCategoryCount() {
        VisitorBlogCategoryApi.getBlogColletionNum().then((res) => {
            if (res && res.code === 200) {
                setCategoryCount(res.data);
            }
            setIsLoading(false);
        });
    }

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                分类
            </Typography>
            {
                isLoading ? (
                    <Skeleton variant="text" width={50} />
                ) : (
                    <Typography variant="body1">{categoryCount}</Typography>
                )
            }
        </Box>
    );
}

export default CategoryCount;