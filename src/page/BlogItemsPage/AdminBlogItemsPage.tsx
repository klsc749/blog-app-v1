import React, {useEffect, useState} from "react";
import {QueryPageResult} from "../../model/QueryPageResult";
import BlogItem from "../../model/admin/BlogItem";
import {QueryPageUtil} from "../../model/QueryPageUtil";
import {Container} from "@mui/material";
import Loading from "../../component/Loading/Loading";
import {root} from "./BlogItemsPageCommon";
import {useNavigate} from "react-router-dom";
import AdminBlogItemList from "../../component/BlogItemList/AdminBlogItemList";
import BlogApi from "../../service/admin/BlogApi";


function BlogItemsPage(){
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 8;
    const [pageQueryResult, setPageQueryResult]
        = useState<QueryPageResult<BlogItem>>(new QueryPageResult<BlogItem>([], 0, 0, 0, 0));
    const [loading, setLoading] = useState<boolean>(false);
    const navigate =  useNavigate();
    useEffect(() => {
        getBlogItemList()
    }, [currentPage]);

    function handlePageChange(event: React.ChangeEvent<unknown>, value: number){
        setCurrentPage(value);
    }

    function getBlogItemList(){
        setLoading(true);
        BlogApi.getAdminBlogItems(new QueryPageUtil(currentPage, pageSize)).then((response) => {
            setLoading(false)
            if(response?.code === 200){
                setPageQueryResult(response.data);
            }else{
                navigate("/NotFound");
            }
        })
    }

    if(loading){
        return <Loading/>;
    }

    return (
        <Container sx={root}>
            {
                <AdminBlogItemList
                    queryPageResult={pageQueryResult}
                    handlePageChange={handlePageChange}/>
            }
        </Container>
    )
}

export default BlogItemsPage;