import {root} from "../../../page/CategoryPage/CatogoryPageCommon";
import {Box, Grid, Pagination, Typography} from "@mui/material";
import AdminBlogCollectionCard from "../BlogCollectionCard/AdminBlogCollectionCard";
import React from "react";
import {BlogCollectionListProps} from "./BlogCollectionListCommon";

function AdminBlogCollectionList({queryPageResult, handlePageChange} : BlogCollectionListProps){
    return(
        <div style={root}>
            <Typography color={"white"} textAlign={"center"} variant="h2" component="h1" gutterBottom>
                博客分类
            </Typography>
            <Grid container spacing={2}>
                {queryPageResult.data.map((collection, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                        <AdminBlogCollectionCard blogCollection={collection} />
                    </Grid>
                ))}
            </Grid>
            <Box display="flex" justifyContent="center" marginTop={2}>
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

export default AdminBlogCollectionList;