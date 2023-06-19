import {QueryPageResult} from "../../model/QueryPageResult";
import BlogItem from "../../model/admin/BlogItem";
import React from "react";
import {Box, Pagination} from "@mui/material";
import AdminBlogItemCard from "../BlogItemCard/AdminBlogItemCard";

interface BlogItemListProps {
    queryPageResult : QueryPageResult<BlogItem>
    handlePageChange : (event: React.ChangeEvent<unknown>, value: number) => void;
}

function AdminBlogItemList({queryPageResult, handlePageChange } : BlogItemListProps){
    return(
        <div>
            <Box my={4}>
                {queryPageResult.data.map((blogItem : BlogItem) => (
                    <AdminBlogItemCard blogItem={blogItem} key={blogItem.id} />
                ))}
            </Box>
            <Box display="flex" justifyContent="center" my={4}>
                <Pagination
                    count={queryPageResult.totalPages}
                    page={queryPageResult.currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                />
            </Box>
        </div>
    )
}

export default AdminBlogItemList
