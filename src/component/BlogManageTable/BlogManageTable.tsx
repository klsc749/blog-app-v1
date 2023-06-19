import BlogManageItem, {BlogManageItemProps} from "./BlogManageItem";
import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import {QueryPageResult} from "../../model/QueryPageResult";
import {useEffect, useState} from "react";
import BlogApi from "../../service/admin/BlogApi";
import Loading from "../Loading/Loading";

function BlogManageTable(){
    const [queryResult, setQueryResult] = useState<QueryPageResult<BlogManageItemProps>>
    ({data: [], totalElements: 0, currentPage: 1, pageSize: 10, totalPages: 0});
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {getBlogList()}, [])

    function handleOnPageChange(event: unknown, page: number){
        setQueryResult({...queryResult, currentPage: page + 1, });
        getBlogList();
    }

    function getBlogList(){
        setLoading(true)
        BlogApi.getAdminBlogItems({page : queryResult.currentPage, limit : queryResult.pageSize}).then(
            (result) => {
                setQueryResult({
                    ...result.data,
                    data: result.data.data.map((blog) => ({
                        id: blog.id,
                        title: blog.title,
                        category: blog.category,
                        tags: blog.tags,
                        publishDate: blog.date,
                    })),
                });
                setLoading(false)
            }
        )
    }

    if(loading){
        return <Loading/>;
    }


    return(
        <Box>
            <TableContainer>
                <Table>
                    <BlogManageTableHead/>
                    {BlogManageTableBody(queryResult?.data)}
                </Table>
            </TableContainer>
            <TablePagination count={queryResult.totalElements}
                             page={queryResult.currentPage - 1}
                             rowsPerPage={queryResult.pageSize}
                             onPageChange={handleOnPageChange}
            />
        </Box>
    )
}

function BlogManageTableHead(){
    return(
        <TableHead>
            <TableRow>
                <TableCell>标题</TableCell>
                <TableCell>分类</TableCell>
                <TableCell>标签</TableCell>
                <TableCell>发布日期</TableCell>
                <TableCell>操作</TableCell>
            </TableRow>
        </TableHead>
    )
}

function BlogManageTableBody(blogList: BlogManageItemProps[]) {
    return (
        <TableBody>
            {blogList?.map((blog) => (
                <BlogManageItem
                    id={blog.id}
                    key={blog.id}
                    title={blog.title}
                    category={blog.category}
                    publishDate={blog.publishDate}
                    tags={blog.tags}
                />
            ))}
        </TableBody>
    );
}


export default BlogManageTable;
