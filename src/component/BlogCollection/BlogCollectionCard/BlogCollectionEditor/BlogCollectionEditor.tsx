import React, { useState } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions,
    Button,
    Box,
    InputLabel,
    FormControl, RadioGroup, FormControlLabel, Radio, Input, LinearProgress
} from '@mui/material';
import BlogCollection from "../../../../model/visitor/BlogCollection";
import BlogCategoryApi from "../../../../service/admin/BlogCategoryApi";
import QiniuUploadApi from "../../../../service/admin/QiniuUploadApi";
import {qiniuConfig} from "../../../../config";

interface EditBlogCollectionDialogProps {
    open: boolean;
    blogCollection : BlogCollection;
    onClose: () => void;
}

function BlogCollectionEditor({ open, blogCollection, onClose } : EditBlogCollectionDialogProps){
    const [editedTitle, setEditedTitle] = useState(blogCollection.title);
    const [editedCover, setEditedCover] = useState(blogCollection.cover);
    const [coverType, setCoverType] = useState<'url' | 'file'>('url');
    const [file, setFile] = useState<File>();
    const [uploadPercent, setUploadPercent] = useState(0);
    const [progressVisible, setProgressVisible] = useState(false);
    const handleSave = () => {
        saveBlogCollection();
    };

    function saveBlogCollection(){
        const newBlogCollection = new BlogCollection(blogCollection.id, editedTitle, editedCover, blogCollection.createDate);
        BlogCategoryApi.updateCategory(newBlogCollection).then((response) => {
            if(response?.code === 200){
                onClose();
            }
        })
    }

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>){
        if(event.target.files){
            setFile(event.target.files[0]);
            setProgressVisible(true)
            QiniuUploadApi.uploadFile({
                file : event.target.files[0],
                path : "blog-collection-cover",
                setProgress : handleSetUploadPercent,
                handleComplete : handleUploadComplete
            }).then((response) => {

            })
        }
    }

    function handleUploadComplete(url: string){
        setEditedCover(url + qiniuConfig.collectionCoverQuality);
        setProgressVisible(false);
    }

    function handleSetUploadPercent(percent: number){
        setUploadPercent(percent)
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Edit Blog Collection</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Title"
                    fullWidth
                    value={editedTitle}
                    onChange={(e) => setEditedTitle(e.target.value)}
                />
                <Box my={2}>
                    <InputLabel htmlFor="cover-input">Cover</InputLabel>
                    <FormControl fullWidth component="fieldset">
                        <RadioGroup
                            row
                            name="coverType"
                            value={coverType}
                            onChange={(e) => setCoverType(e.target.value as 'url' | 'file')}
                        >
                            <FormControlLabel value="url" control={<Radio />} label="URL" />
                            <FormControlLabel value="file" control={<Radio />} label="File" />
                        </RadioGroup>
                        {coverType === 'url' ? (
                            <TextField
                                id="cover-url-input"
                                margin="dense"
                                fullWidth
                                value={editedCover ? editedCover : ''}
                                onChange={(e) => setEditedCover(e.target.value)}
                            />
                        ) : (
                            <div>
                                <UploadProgressBar progressVisible={progressVisible} uploadPercent={uploadPercent}/>
                                <Input
                                    id="cover-file-input"
                                    margin="dense"
                                    fullWidth
                                    type="file"
                                    inputProps={{ accept: 'image/*' }}
                                    onChange={handleFileChange}
                                />
                            </div>
                        )}
                    </FormControl>
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

interface UploadProgressBarProps {
    progressVisible: boolean;
    uploadPercent: number;
}

const UploadProgressBar: React.FC<UploadProgressBarProps> = ({ progressVisible, uploadPercent }) => {
    if (!progressVisible) {
        return null;
    }

    return <LinearProgress variant="determinate" value={uploadPercent} />;
};

export default BlogCollectionEditor;
