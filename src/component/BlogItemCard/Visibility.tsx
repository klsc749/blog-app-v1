import React from 'react';
import { Typography } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import PublicIcon from '@mui/icons-material/Public';

interface VisibilityProps {
    isPrivate?: String;
}

const Visibility: React.FC<VisibilityProps> = ({ isPrivate }) => {
    console.log(isPrivate);
    return (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            {isPrivate === 'PRIVATE' ? <LockIcon /> : <PublicIcon />}
            <Typography variant="subtitle2" style={{ marginLeft: '4px' }}>
                {isPrivate}
            </Typography>
        </div>
    );
};

export default Visibility;
