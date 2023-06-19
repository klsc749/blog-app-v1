import ReactMarkdown from "react-markdown";
import { Box, Typography } from "@mui/material";
import {Blog} from "../../model/visitor/Blog";
import Tag from "../Tag/Tag";
import {styled} from "@mui/material";
import React, { ReactElement } from "react";
import Loading from "../Loading/Loading";
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkMath from 'remark-math'
import rehypeMathJaxSvg from "rehype-mathjax";

interface BlogContentProps {
    blog?: Blog;
}

const BlogContainer = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    marginBottom: theme.spacing(4),
}));

const TagContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
}));

const StyledImage = styled("img")({
    maxWidth: "100%", // Limit the width of the image to 100% of the container
    height: "auto", // Preserve the aspect ratio of the image
});

const CustomImage: React.FC<any> = (props) => {
    return <StyledImage {...props} />;
};
const CodeComponent = ({ node, inline, className, children, ...props }: any): ReactElement => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
        <SyntaxHighlighter
            {...props}
            children={String(children).replace(/\n$/, '')}
            style={atomDark}
            language={match[1]}
            PreTag="div"
        />
    ) : (
        <code {...props} className={className}>
            {children}
        </code>
    );
};

function BlogContent({blog}: BlogContentProps) {
    if(!blog)
        return (<Loading/>);

    return (
        <BlogContainer>
            <Typography variant="h4" component="div" textAlign="center" gutterBottom>
                {blog.title}
            </Typography>
            <Box textAlign="right" mb={2}>
                <Typography variant="subtitle2">
                    分类: {blog.category} | 阅读数: {blog.viewCount}
                </Typography>
                <Typography variant="subtitle2">
                    发布于: {new Date(blog?.date).toLocaleDateString()} | 上次修改: {new Date(blog?.lastModifiedTime).toLocaleDateString()}
                </Typography>
            </Box>
            <TagContainer>
                标签:
                {blog.tags.map((tag, index) => (
                    <Tag tagName={tag} key={index} />
                ))}
            </TagContainer>
            <Typography component="div">
                <ReactMarkdown
                    rehypePlugins={[rehypeMathJaxSvg]}
                    remarkPlugins={[remarkGfm, remarkMath]}
                    components={{
                    img: CustomImage,
                    code : CodeComponent
                }}>
                    {blog.content}
                </ReactMarkdown>
            </Typography>
        </BlogContainer>
    );
}

export default BlogContent;