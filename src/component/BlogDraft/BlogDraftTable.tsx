import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow} from "@mui/material";
import BlogDraftItem, {BlogDraftItemProps} from "./BlogDraftItem";
import {useEffect, useState} from "react";
import {QueryPageResult} from "../../model/QueryPageResult";
import {BlogManageItemProps} from "../BlogManageTable/BlogManageItem";
import BlogApi from "../../service/admin/BlogApi";
import Loading from "../Loading/Loading";

function BlogDraftTable(){
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
        BlogApi.getBlogItemByPageAndStatus({page : queryResult.currentPage, limit : queryResult.pageSize}, "DRAFT").then(
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
                    <BlogDraftTableHead/>
                    {BlogDraftTableBody(queryResult?.data)}
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

function BlogDraftTableHead(){
    return(
        <TableHead>
            <TableRow>
                <TableCell>标题</TableCell>
                <TableCell>分类</TableCell>
                <TableCell>标签</TableCell>
                <TableCell>操作</TableCell>
            </TableRow>
        </TableHead>
    )
}

function BlogDraftTableBody(blogList: BlogDraftItemProps[]){
    return(
        <TableBody>
            {blogList.map((blog) => (
                <BlogDraftItem key={blog.id} {...blog}/>
            ))}
        </TableBody>
    )
}

export default BlogDraftTable;