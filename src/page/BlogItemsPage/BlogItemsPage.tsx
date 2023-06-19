import React, {useEffect, useState} from "react";
import {QueryPageResult} from "../../model/QueryPageResult";
import {BlogItem} from "../../model/visitor/BlogItem";
import BlogServiceApi from "../../service/visitor/BlogApi";
import {QueryPageUtil} from "../../model/QueryPageUtil";
import {Container} from "@mui/material";
import BlogItemList from "../../component/BlogItemList/BlogItemList";
import Loading from "../../component/Loading/Loading";
import {root} from "./BlogItemsPageCommon";
import {useNavigate} from "react-router-dom";


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
        BlogServiceApi.getBlogItemsByPage(new QueryPageUtil(currentPage, pageSize)).then((response) => {
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
                <BlogItemList
                    queryPageResult={pageQueryResult}
                    handlePageChange={handlePageChange}/>
            }
        </Container>
    )
}

export default BlogItemsPage;