import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { styled } from '@mui/system';
import MarkdownNavbar from 'markdown-navbar';
import BlogServiceApi from '../service/visitor/BlogApi';
import Loading from "../component/Loading/Loading";
import {Blog} from "../model/visitor/Blog";
import BlogContent from "../component/BlogContent/BlogContent";
import 'markdown-navbar/dist/navbar.css';

const NavContainer = styled('div')(({ theme }) => ({
    position: 'fixed',
    right: '20px',
    top: '60px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    border: '1px solid #eee',
    boxShadow: '0 0 8px 0 rgba(0, 0, 0, 0.1)',
    transform: 'translate(0, 0)',
    transition: 'transform 500ms ease',
    '&.hide': {
        transform: 'translate(calc(20px + 100%), 0)',
    },
}));

const ToggleBtn = styled('button')(({ theme }) => ({
    position: 'absolute',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    color: 'rgb(255, 115, 0)',
    fontSize: '18px',
    lineHeight: '40px',
    padding: '0 11px',
    borderRadius: '5px',
    transform: 'translate(calc(-12px - 100%), 0)',
    transition: 'color 300ms ease, background-color 300ms ease',
    '&:active': {
        backgroundColor: 'rgb(255, 115, 0)',
        color: '#fff',
    },
}));

function BlogPage(){
    const {id} = useParams();
    const [blog, setBlog] = useState<Blog>();
    const [loading, setLoading] = useState<boolean>(true);
    const [openMenu, setOpenMenu] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        getBlog();
    }, [])

    function getBlog(){
        setLoading(true)
        if (id != null) {
            BlogServiceApi.getBlogById(id).then((result) => {
                setLoading(false);
                if (result?.data == null) {
                    navigate('/NotFound');
                }
                setBlog(result?.data);
            })
        } else {
            navigate('/NotFound');
        }
    }

    if(loading){
        return <Loading/>
    }

    const handleToggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '20px'
        }}>
            <Box sx={{ flexGrow: 1, marginRight: '20px' }}>
                <BlogContent blog={blog} />
            </Box>
            <NavContainer className={openMenu ? '' : 'hide'}>
                <MarkdownNavbar source={blog?.content ?? ''} className="toc-list" ordered={false} />
                <ToggleBtn onClick={handleToggleMenu}>
                    Menu
                </ToggleBtn>
            </NavContainer>
        </Box>
    );
}

export default BlogPage;
