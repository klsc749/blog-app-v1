import BlogCollection from "../../model/visitor/BlogCollection";
import React, {useEffect, useState} from "react";
import {QueryPageResult} from "../../model/QueryPageResult";
import Loading from "../../component/Loading/Loading";
import {useNavigate, useParams} from "react-router-dom";
import VisitorBlogCategoryApi from "../../service/visitor/VisitorBlogCategoryApi";
import BlogCollectionList from "../../component/BlogCollection/BlogCollectionList/BlogCollectionList";


function CategoryPage(){
    const [queryPageResult, setQueryPageResult] = useState(
        new QueryPageResult<BlogCollection>([], 0, 0, 0, 0)
    );
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;
    const navigate =  useNavigate();
    function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
        setCurrentPage(value);
    }

    function getBlogCollections(){
        setLoading(true)
        VisitorBlogCategoryApi.getBlogCollectionsByPage({page:currentPage, limit : pageSize}).then((result) => {
            setLoading(false)
            if(result?.code === 200){
                setQueryPageResult(result.data);
            }else{
                navigate("/NotFound");
            }
        })
    }

    useEffect(() => {
        getBlogCollections();
    }, [currentPage]);

    if(loading){
        return <Loading />
    }

    return(
        <BlogCollectionList queryPageResult={queryPageResult} handlePageChange={handlePageChange}/>
    )
}

export default CategoryPage;