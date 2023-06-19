import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import Blog from "../model/admin/Blog";
import BlogApi from "../service/admin/BlogApi";
import Loading from "../component/Loading/Loading";
import BlogEditor from "../component/BlogEditor/BlogEditor";

function EditBlogPage(){
    const [loading, setLoading] = useState(false);
    const [blog, setBlog] = useState<Blog>();
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
            getBlog();
        }
        , [])

    function getBlog(){
        setLoading(true);
        if(!id){
            navigate('/NotFound')
        }
        BlogApi.getBlogById(id ? id : "").then((result) => {
            setLoading(false);
            if(result?.data == null){
                navigate('/NotFound');
            }
            setBlog(result?.data);
        }).catch((error) => {
                setLoading(false);
                console.log(error);
            }
        )
    }

    if(loading){
        return <Loading/>;
    }

    return (
        <BlogEditor
            id={blog?.id}
            status={blog?.status}
            title={blog?.title}
            content={blog?.content}
            tags={blog?.tags}
            visibility={blog?.visibility}
            category={blog?.category}
        />
    )
}

export default EditBlogPage;