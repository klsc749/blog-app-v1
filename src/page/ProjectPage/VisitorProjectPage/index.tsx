import { useEffect, useState } from "react";
import { QueryPageResult } from "../../../model/QueryPageResult";
import Project from "../../../model/visitor/Project";
import ProjectApi from "../../../service/visitor/ProjectApi";
import Loading from "../../../component/Loading/Loading";
import ProjectList from "../../../component/ProjectInfo/ProjectList";

function VisitorProjectPage(){
    const [queryPageResult, setQueryPageResult] = useState(new QueryPageResult<Project>([], 0, 0, 0, 0));
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const pageSize = 10;

    useEffect(() => {
        getProjectByPage();
    }, []);

    function getProjectByPage(){
        setLoading(true);
        ProjectApi.getProjectByPage({page:currentPage, limit : pageSize}).then((result) => {
            if(result?.code === 200){
                setQueryPageResult(result.data);
            }
            setLoading(false);
        })
    }

    function handlePageChange(event: React.ChangeEvent<unknown>, value: number) {
        setCurrentPage(value);
    }

    if(loading){
        return <Loading />
    }

    return(
        <ProjectList queryPageResult={queryPageResult} handlePageChange={handlePageChange}/>
    )
}

export default VisitorProjectPage;