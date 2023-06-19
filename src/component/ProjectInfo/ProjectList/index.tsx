import { Box, Grid, Pagination, Typography } from '@mui/material';
import Project from "../../../model/visitor/Project";
import ProjectCard from '../ProjectCard';
import { QueryPageResult } from '../../../model/QueryPageResult';

interface ProjectListProps {
    queryPageResult: QueryPageResult<Project>
    handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const root = {
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.8)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    padding: '6px',
    marginLeft: '16px',
    marginRight: '16px',
}

function ProjectList({ queryPageResult, handlePageChange }: ProjectListProps) {
    return (
        <Box sx={root}>
            <Typography style={{ color: '#303f9f' }}   textAlign="center" variant="h2" component="h1" gutterBottom>
                Toy Project
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {queryPageResult.data.map((project) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={project.id} sx={{ padding: '1px' }}>
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box display="flex" justifyContent="center" marginTop={2}>
                <Pagination
                    count={queryPageResult.totalPages}
                    page={queryPageResult.currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                    showFirstButton
                    showLastButton
                />
            </Box>
        </Box>
    );
}

export default ProjectList;