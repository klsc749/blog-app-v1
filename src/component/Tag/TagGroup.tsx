import React from 'react';
import { Box } from '@mui/material';
import Tag from './Tag';

interface TagGroupProps {
    tags: string[];
}

function TagGroup({ tags }: TagGroupProps) {
    if(!tags || tags.length === 0){
        return (
            <Box>
                无标签
            </Box>
        )
    }
    return (
        <Box display="flex" flexDirection="row" flexWrap="wrap" gap={1}>
            {tags?.map((tag, index) => (
                <Tag tagName={tag} key={index} />
            ))}
        </Box>
    );
}

export default TagGroup;