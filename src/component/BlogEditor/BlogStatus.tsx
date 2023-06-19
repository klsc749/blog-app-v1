import React from 'react';
import { Chip } from '@mui/material';

interface BlogStatusProps {
    status?: string;
}

const BlogStatus: React.FC<BlogStatusProps> = ({ status = 'DRAFT' }) => {
    const statusLabel = status === 'PUBLISHED' ? '已发布' : '草稿';
    const statusColor = status === 'PUBLISHED' ? 'primary' : 'secondary';

    return <Chip label={statusLabel} color={statusColor} />;
};

export default BlogStatus;
