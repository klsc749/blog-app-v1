import React, {useRef} from "react";
import Editor from 'for-editor';
import QiniuUploadApi from "../../service/admin/QiniuUploadApi";
import {LinearProgress} from "@mui/material";

const root = {
    editorWrap: {
        width: "100%",
        height: "100%",
    },
    toolbar: {
        background: "linear-gradient(to right, #55efc4, #81ecec, #74b9ff)",
    },
    preview: {
        backgroundColor: "#fafafa",
    },
    scrollbar: {
        width: "6px",
        height: "4px",
        backgroundColor: "transparent",
        thumb: {
            height: "4px",
            borderRadius: "10px",
            background: "linear-gradient(to bottom, #55efc4, #81ecec, #74b9ff)",
        },
        track: {
            borderRadius: "0",
            background: "rgba(0, 0, 0, 0.1)",
        },
    },
};

export interface MarkdownEditorProps {
    handleSave?: ((value: string) => void);
    handleAddImage?: ((file: File) => void);
    content?: string;
    handleContentChange?: ((value: string) => void);
}


function MarkdownEditor(markdownEditorProps: MarkdownEditorProps){
    const handleChange = (value: string) => {
        if(markdownEditorProps.handleContentChange)
            markdownEditorProps.handleContentChange(value);
        else{

        }
    }

    const handleSave = (value : string) => {
        //TODO : Update blog content
        if (markdownEditorProps.handleSave)
            markdownEditorProps.handleSave(value);
        else
            console.log(value)
    }

    const [uploadProgress, setUploadProgress] = React.useState(0);
    const [progressVisible, setProgressVisible] = React.useState(false);
    function handleUploadComplete(url : string){
        setProgressVisible(false);
        setUploadProgress(0);
        if(markdownEditorProps.handleContentChange)
            markdownEditorProps.handleContentChange(markdownEditorProps.content + `![${url}](${url})`);
        else
            console.log(url)
    }


    const handleAddImage = (file: File) => {
        if(!file)
            return;
        try{
            setProgressVisible(true);
            const response =
                QiniuUploadApi.uploadFile({
                    file : file,
                    path : "note",
                    setProgress : setUploadProgress,
                    handleComplete: handleUploadComplete
                    });
            response.then()
        }catch (e) {
            
        }
    }

    return (
        <div style={root.editorWrap}>
            {progressVisible && (
                <LinearProgress variant="determinate" value={uploadProgress} />
            )}
            <Editor value={markdownEditorProps.content}
                    placeholder={"Write something here..."}
                    onChange={(value) => handleChange(value)}
                    onSave={(value) => handleSave(value)}
                    addImg={(file) => handleAddImage(file)}
                    height={"150%"} />
        </div>
    )
}

export default MarkdownEditor;