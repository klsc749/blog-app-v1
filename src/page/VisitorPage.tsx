import NavigationBar from "../component/NavigationBar/NavigationBar";
import {Navigate, Route, Routes} from "react-router-dom";
import HomePage from "./HomePage";
import BlogPage from "./BlogPage";
import Footer from "../component/Footer";
import React from "react";
import NotFound from "../component/NotFound/NotFound";
import CategoryPage from "./CategoryPage/CategoryPage";
import BlogItemsByCategoryPage from "./BlogItemsPage/BlogItemsByCategoryPage";
import VisitorProjectPage from "./ProjectPage/VisitorProjectPage";

const root : React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundImage: `url(https://images.kslc.tech/background/background1.jpg?imageView2/0/format/webp/q/20)`,
    backgroundSize: 'cover', // This will ensure the image covers the whole div
    backgroundPosition: 'center', // This will center the image
    backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
}

function VisitorPage(){
    return(
        <div style={root}>
            <NavigationBar/>
            <div
                style={{
                    flexGrow: 1,
                    marginTop: '16px',
                    marginBottom: '16px',
                }}
            >
                <Routes>
                    <Route index element={<HomePage />} />
                    <Route path="NotFound" element={<NotFound/>}/>
                    <Route path="home" element={<HomePage />} />
                    <Route path="project" element={<VisitorProjectPage/>} />
                    <Route path="blog/:id" element={<BlogPage />} />
                    <Route path="category" element={<CategoryPage />} />
                    <Route path="category/:category" element={<BlogItemsByCategoryPage />} />
                </Routes>
            </div>
            <Footer/>
        </div>
    )
}

export default VisitorPage;