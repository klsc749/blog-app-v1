import {QueryPageResult} from "../../model/QueryPageResult";
import {BlogItem} from "../../model/visitor/BlogItem";
import BlogItemCard from "../BlogItemCard/BlogItemCard";
import {Box, Pagination} from "@mui/material";
import React from "react";
import NoResult from "../NotFound/NoResult";

interface BlogItemProps {
    queryPageResult : QueryPageResult<BlogItem>
    handlePageChange : (event: React.ChangeEvent<unknown>, value: number) => void;
}

export function BlogItemList(blogItemProps : BlogItemProps ){
    if(blogItemProps.queryPageResult.data.length === 0){
        return <NoResult/>
    }

    return(
        <div>
            <Box my={4}>
                {blogItemProps.queryPageResult.data.map((blogItem : BlogItem) => (
                    <BlogItemCard key={blogItem.id} blogItem={blogItem} />
                ))}
            </Box>
            <Box display="flex" justifyContent="center" my={4}>
                <Pagination
                    count={blogItemProps.queryPageResult.totalPages}
                    page={blogItemProps.queryPageResult.currentPage}
                    onChange={blogItemProps.handlePageChange}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                />
            </Box>
        </div>
    )
}

export default BlogItemList