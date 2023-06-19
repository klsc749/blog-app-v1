import {Autocomplete, Chip} from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

interface TagsInputProps{
    tags?: string[];
    setTags?: (tags: string[]) => void;
}

//TODO: get tags from backend
const options = ['react', 'javascript', 'web development'];

function TagsInput(tagsInputProps: TagsInputProps){
    return(
        <Autocomplete
            multiple
            options={options}
            defaultValue={tagsInputProps.tags ? [...tagsInputProps.tags] : []}
            value={tagsInputProps.tags ? [...tagsInputProps.tags] : []}
            freeSolo
            onChange={(event: object, value: String | String[], reason: string) => {
                if(tagsInputProps.setTags){
                    tagsInputProps.setTags(value as string[]);
                }
            }
            }
            renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                    <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))
            }
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="标签"
                    placeholder="Enter tags (comma separated)"
                />
            )}
        />
    )
}

export default TagsInput