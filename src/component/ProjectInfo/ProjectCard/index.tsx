import { Box, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Project from "../../../model/visitor/Project";

interface ProjectCardProps {
    project: Project;
}

const CardLink = styled('a')({
    textDecoration: 'none',
    '&:hover': {
        transform: 'scale(1.02)',
        transition: 'transform .2s',
    }
});

function ProjectCard({ project }: ProjectCardProps) {
    return (
        <CardLink href={project.url} target="_blank" rel="noopener">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundImage: `url(${project.imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 4,
                    overflow: 'hidden',
                    minHeight: '250px',
                    maxWidth: '100%',
                }}
            >
                <CardContent sx={{ 
                    flex: '1 0 auto', 
                    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 2 // gap between items
                }}>
                    <Typography component="div" variant="h5">
                        {project.name}
                    </Typography>
                    <Typography variant="subtitle1" textAlign="center">
                        {project.description}
                    </Typography>
                </CardContent>
            </Box>
        </CardLink>
    );
}

export default ProjectCard;
