import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import {Alert, Autocomplete, Box, Button, FormControl, InputLabel, MenuItem, Select, Snackbar} from '@mui/material';
import { Chip } from '@mui/material';
import MarkdownEditor from "./MarkdownEditor";
import TagsInput from "./TagsInput";
import {ErrorPublishTip, ErrorSaveTip, SuccessPublishTip, SuccessSaveTip} from "./SnackAlert";
import {BlogEditApi} from "../../service/admin/BlogEditApi";
import BlogStatus from "./BlogStatus";

const root : React.CSSProperties = {
    flexGrow: 1,
    background: 'rgba(255, 255, 255, 0.8)',  // Gradient background
    backdropFilter: 'blur(1px)', // Gaussian blur
    padding: '8px',
    borderRadius: '12px',
    marginLeft: '8px',
    marginRight: '8px',
}

export interface BlogEditorProps {
    id?: string;
    title?: string;
    content?: string;
    category?: string;
    tags?: string[];
    status?: string;
    visibility?: string;
    date?: string;
    lastModifiedTime?: string;
}

const options = ['react', 'javascript', 'web development'];

function BlogEditor(blogEditorProps : BlogEditorProps) {
    const [id, setId] = useState<string>(blogEditorProps.id ? blogEditorProps.id : "");
    const [tags, setTags] = useState<string[]>(blogEditorProps.tags ? blogEditorProps.tags : []);
    const [title, setTitle] = useState<string>(blogEditorProps.title ? blogEditorProps.title : "");
    const [category, setCategory] = useState<string>(blogEditorProps.category ? blogEditorProps.category : "");
    const [content, setContent] = useState<string>(blogEditorProps.content ? blogEditorProps.content : "");
    const [status, setStatus] =
        useState<string>(blogEditorProps.status ? blogEditorProps.status : "DRAFT");
    const [visibility, setVisibility] =
        useState<string>(blogEditorProps.visibility ? blogEditorProps.visibility : "PRIVATE");
    const [date, setDate] = useState<string>(blogEditorProps.date ? blogEditorProps.date : "");
    const [lastModifiedTime, setLastModifiedTime] = useState<string>(blogEditorProps.lastModifiedTime ? blogEditorProps.lastModifiedTime : "");

    function handleTagsChange(tags: string[]) {
        setTags(tags);
    }

    function handleTitleChange(title: string) {
        setTitle(title);
    }

    function handleCategoryChange(category: string) {
        setCategory(category);
    }

    function handleContentChange(content: string) {
        setContent(content);
    }

    function handleVisibilityChange(visibility: string) {
        setVisibility(visibility)
    }

    const [successSaveTipOpen, setSuccessSaveTipOpen] = useState(false);
    const [errorSaveTipOpen, setErrorSaveTipOpen] = useState(false);
    const [successPublishTipOpen, setSuccessPublishTipOpen] = useState(false);
    const [errorPublishTipOpen, setErrorPublishTipOpen] = useState(false);


    function handleSave(value : string) {
        BlogEditApi.saveBlogContent({id, title, content, category, tags, status, visibility, date, lastModifiedTime: lastModifiedTime}).then((response) => {
            if(response.code === 200) {
                setId(response.data.id ? response.data.id : id);
                setLastModifiedTime(response.data.lastModifiedTime ? response.data.lastModifiedTime : lastModifiedTime);
                setDate(response.data.date ? response.data.date : date);
                setSuccessSaveTipOpen(true);
            } else {
                setErrorSaveTipOpen(true);
            }
        }).catch((error) => {
            setErrorSaveTipOpen(true);
        });
    }

    function handlePublish(){
        BlogEditApi.publishBlog({id, title, content, category, tags, status, visibility, date, lastModifiedTime: lastModifiedTime}).then(
            (response) => {
                if(response.code === 200) {
                    setId(response.data.id ? response.data.id : id);
                    setStatus(response.data.status ? response.data.status : status);
                    setLastModifiedTime(response.data.lastModifiedTime ? response.data.lastModifiedTime : lastModifiedTime);
                    setDate(response.data.date ? response.data.date : date);
                    setSuccessPublishTipOpen(true);
                } else {
                    setErrorPublishTipOpen(true);
                }
            }
        )
    }

    function handleSaveToDraft(){
        BlogEditApi.saveBlog({id, title, content, category, tags, status, visibility})
            .then((response) => {
            if(response.code === 200) {
                setStatus(response.data.status ? response.data.status :  status);
                setSuccessSaveTipOpen(true);
            } else {
                setErrorSaveTipOpen(true);
            }
        }).catch((error) => {
            setErrorSaveTipOpen(true);
        });
    }


    return (
        <div style={root}>
            <SuccessSaveTip open={successSaveTipOpen} handleClose={() => setSuccessSaveTipOpen(false)}/>
            <ErrorSaveTip open={errorSaveTipOpen} handleClose={() => setErrorSaveTipOpen(false)}/>
            <SuccessPublishTip open={successPublishTipOpen} handleClose={() => setSuccessPublishTipOpen(false)}/>
            <ErrorPublishTip open={errorPublishTipOpen} handleClose={() => setErrorPublishTipOpen(false)}/>
            <TextField
                label="标题"
                defaultValue={blogEditorProps.title}
                placeholder="Enter a title"
                fullWidth
                margin="normal"
                onChange={(event) => handleTitleChange(event.target.value)}
            />
            <TextField
                label="分类"
                defaultValue={blogEditorProps.category}
                placeholder="Enter a category"
                fullWidth
                margin="normal"
                onChange={(event) => handleCategoryChange(event.target.value)}
            />

            <TagsInput tags={tags} setTags={handleTagsChange}/>

            <FormControl fullWidth margin="normal">
                <InputLabel>可见性</InputLabel>
                <Select value={visibility} onChange={e => handleVisibilityChange(e.target.value)}>
                    <MenuItem value={"PRIVATE"}  >PRIVATE</MenuItem>
                    <MenuItem value={"PUBLIC"} >PUBLIC</MenuItem>
                </Select>
            </FormControl>
            <BlogStatus status={status}/>
            <Box display="flex" justifyContent="space-between" alignItems="center" marginTop={2} marginBottom={2}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handlePublish()}
                    sx={{
                        backgroundColor: "primary.main",
                        "&:hover": {
                            backgroundColor: "primary.dark",
                        },
                    }}
                >
                    发布
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleSaveToDraft()}
                    sx={{
                        backgroundColor: "secondary.main",
                        "&:hover": {
                            backgroundColor: "secondary.dark",
                        },
                    }}
                >
                    保存至草稿箱
                </Button>
            </Box>
            <MarkdownEditor content={content} handleContentChange={handleContentChange} handleSave={handleSave} />
        </div>
    );
}

export default BlogEditor;
