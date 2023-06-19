import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import Footer from "../component/Footer";
import AdminNavigationBar from "../component/NavigationBar/AdminNavigationBar";
import BlogEditor, {BlogEditorProps} from "../component/BlogEditor/BlogEditor";
import AuthRoute from "../component/AuthRoute";
import BlogPage from "./BlogPage";
import EditBlogPage from "./EditBlogPage";
import AdminHomePage from "./AdminHomePage";
import AdminCategoryPage from "./CategoryPage/AdminCategoryPage";
import BlogManagePage from "./BlogManagePage/BlogManagePage";
import BlogDraftPage from "./BlogDraftPage/BlogDraftPage";
import BlogRecyclePage from "./BlogRecyclePage/BlogRecyclePage";
import ProjectManagePage from "./ProjectPage/AdminVisitorPage";

const root : React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundImage: `url(https://images.kslc.tech/background/background2.jpg?imageView2/0/format/webp/q/20)`,
    backgroundSize: 'cover', // This will ensure the image covers the whole div
    backgroundPosition: 'center', // This will center the image
    backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
}
const blogEditorProps: BlogEditorProps = {
    title: 'My Awesome Blog Post',
    content: 'This is the initial content of my blog post.',
    category: 'Tech',
    tags: ['react', 'javascript', 'web development'],
};

function AdminPage() {


    return (
        <div style={root}>
            <AdminNavigationBar/>
            <div
                style={{
                    flexGrow: 1,
                    marginTop: '16px',
                    marginBottom: '16px',
                }}
            >
                <Routes>
                    <Route element={<AuthRoute/>}>
                        <Route index element={<AdminHomePage />} />
                        <Route path="home" element={<AdminHomePage />} />
                        <Route path="addBlog" element={<BlogEditor/>} />
                        <Route path="editBlog/:id" element={<EditBlogPage />} />
                        <Route path="category" element={<AdminCategoryPage />} />
                        <Route path="blogManage" element={<BlogManagePage/>}/>
                        <Route path="drafts" element={<BlogDraftPage/>}/>
                        <Route path="recycleBin" element={<BlogRecyclePage/>}/>
                        <Route path="project" element={<ProjectManagePage/>}/>
                    </Route>
                </Routes>

            </div>
            <Footer/>
        </div>
    );
}

export default AdminPage;