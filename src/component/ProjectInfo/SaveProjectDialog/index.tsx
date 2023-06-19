import { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, LinearProgress, TextField } from '@mui/material';
import Project from "../../../model/visitor/Project";
import QiniuUploadApi from '../../../service/admin/QiniuUploadApi';
import { qiniuConfig } from '../../../config';
import ProjectApi from '../../../service/admin/ProjectApi';

interface SaveProjectDialogProps {
    project: Project | null;
    open: boolean;
    onClose: () => void;
}

function SaveProjectDialog({ project, open, onClose}: SaveProjectDialogProps) {
    const [id, setId] = useState(project?.id || '');
    const [name, setName] = useState(project?.name || '');
    const [description, setDescription] = useState(project?.description || '');
    const [url, setUrl] = useState(project?.url || '');
    const [imageURL, setImageURL] = useState(project?.imageURL || '');
    const [imageFile, setImageFile] = useState<File>();
    const [uploadPercent, setUploadPercent] = useState(0);
    const [progressVisible, setProgressVisible] = useState(false);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    };

    const handleImageURLChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setImageURL(event.target.value);
    };

    const handleImageFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        console.log(file);
        if (file) {
            setImageFile(file);
            setProgressVisible(true)
            QiniuUploadApi.uploadFile({
                file : file,
                path : "project-cover",
                setProgress : handleSetUploadPercent,
                handleComplete : handleUploadComplete
            }).then((response) => {

            })
        }
    };

    function handleUploadComplete(url: string){
        setImageURL(url + qiniuConfig.collectionCoverQuality);
        setProgressVisible(false);
    }

    function handleSetUploadPercent(percent: number){
        setUploadPercent(percent)
    }

    const handleSave = () => {
        const updatedProject = new Project(
            project?.id || '',
            name,
            description,
            url,
            imageURL
        );
        ProjectApi.saveProject(updatedProject).then((response) => {
            if(response?.code === 200){
                const savedProject = response.data;
                setId(savedProject.id);
                setName(savedProject.name);
                setDescription(savedProject.description);
                setUrl(savedProject.url);
                setImageURL(savedProject.imageURL);
            }
        });
        onClose();
        window.location.reload();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{project ? 'Edit Project' : 'Add Project'}</DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Description"
                    value={description}
                    onChange={handleDescriptionChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="URL"
                    value={url}
                    onChange={handleUrlChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Image URL"
                    value={imageURL}
                    onChange={handleImageURLChange}
                    fullWidth
                />
                <UploadProgressBar progressVisible={progressVisible} uploadPercent={uploadPercent}/>
                <input type="file" onChange={handleImageFileChange} />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>关闭</Button>
                <Button onClick={handleSave} disabled={progressVisible}>保存</Button>
            </DialogActions>
        </Dialog>
    );
}

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

export default SaveProjectDialog;