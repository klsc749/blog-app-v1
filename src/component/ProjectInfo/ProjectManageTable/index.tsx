import { useEffect, useState } from 'react';
import { QueryPageResult } from '../../../model/QueryPageResult';
import Project from '../../../model/visitor/Project';
import ProjectApi from '../../../service/visitor/ProjectApi';
import Loading from '../../Loading/Loading';
import {
    TableRow,
    TableCell,
    TableHead,
    Box,
    TableContainer,
    Table,
    TableBody,
    TablePagination,
    IconButton,
    Tooltip,
} from '@mui/material';
import ProjectManageItem from './ProjectManageItem';
import SaveProjectDialog from '../SaveProjectDialog';
import AddIcon from '@mui/icons-material/Add';

interface AddProjectButtonProps {
    onOpen: () => void;
}

function ProjectManageTable() {
    const [queryResult, setQueryResult] = useState<QueryPageResult<Project>>({
        data: [],
        totalElements: 0,
        currentPage: 1,
        pageSize: 10,
        totalPages: 0,
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {fetchProjectByTPage()}, []);

    function fetchProjectByTPage() {
        setLoading(true);
        ProjectApi.getProjectByPage({ page: queryResult.currentPage, limit: queryResult.pageSize }).then((result) => {
            if (result?.code === 200) {
                setQueryResult(result.data);
            }
            setLoading(false);
        });
    }

    function handleOnPageChange(event: unknown, page: number) {
        setQueryResult({ ...queryResult, currentPage: page + 1 });
        fetchProjectByTPage();
    }

    if (loading) {
        return <Loading />;
    }

    return (
        <Box sx={{ mt: 3 }}>
            <TableContainer>
                <Table>
                    <ProjectManageTableHead />
                    {ProjectManageTableBody(queryResult.data)}
                </Table>
            </TableContainer>
            <TablePagination
                count={queryResult.totalElements}
                page={queryResult.currentPage - 1}
                rowsPerPage={queryResult.pageSize}
                onPageChange={handleOnPageChange}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <AddProjectButton onOpen={() => setOpen(true)} />
            </Box>
            <SaveProjectDialog project={null} open={open} onClose={() => setOpen(false)} />
        </Box>
    );
}

function ProjectManageTableHead() {
    return (
        <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
                <TableCell sx={{ fontWeight: 'bold', border: 1, borderColor: '#dedede', padding: 2 }}>项目名称</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: 1, borderColor: '#dedede', padding: 2 }}>描述</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: 1, borderColor: '#dedede', padding: 2 }}>项目链接</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: 1, borderColor: '#dedede', padding: 2 }}>封面链接</TableCell>
                <TableCell sx={{ fontWeight: 'bold', border: 1, borderColor: '#dedede', padding: 2 }}>操作</TableCell>
            </TableRow>
        </TableHead>
    );
}

function ProjectManageTableBody(data: Project[]) {
    return (
        <TableBody>
            {data.map((project) => (
                <ProjectManageItem key={project.id} project={project} />
            ))}
        </TableBody>
    );
}

function AddProjectButton({ onOpen }: AddProjectButtonProps) {
    return (
        <Tooltip title="Add Project">
            <IconButton color="primary" onClick={onOpen}>
                <AddIcon />
            </IconButton>
        </Tooltip>
    );
}

export default ProjectManageTable;
