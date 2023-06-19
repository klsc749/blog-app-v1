import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Box } from "@mui/material";
import QRCodeIcon from "./PersonInfo/SocialMedia/QRIcon/QRIcon";
import SocialMedia from './PersonInfo/SocialMedia';
import Project from '../model/visitor/Project';
import ProjectCard from './ProjectInfo/ProjectCard';
import ProjectList from './ProjectInfo/ProjectList';
import VisitorProjectPage from '../page/ProjectPage/VisitorProjectPage';
import ProjectManageTable from './ProjectInfo/ProjectManageTable';

function Test() {
    const project: Project = new Project(
        '1',
        'My Project',
        'This is a test project',
        'https://google.com',
        'https://images.kslc.tech/blog-collection-cover/Vn7qzKSTDOen1wlImk6Dv'
    );

    const projects: Project[] = [
        new Project(
            '1',
            'My Project 1',
            'This is a test project 1',
            'https://google.com',
        'https://images.kslc.tech/blog-collection-cover/Vn7qzKSTDOen1wlImk6Dv'
        ),
        new Project(
            '2',
            'My Project 2',
            'This is a test project 2',
            'https://google.com',
        'https://images.kslc.tech/blog-collection-cover/Vn7qzKSTDOen1wlImk6Dv'
        ),
        new Project(
            '3',
            'My Project 3',
            'This is a test project 3',
            'https://google.com',
        'https://images.kslc.tech/blog-collection-cover/Vn7qzKSTDOen1wlImk6Dv'
        ),
        new Project(
            '3',
            'My Project 3',
            'This is a test project 3',
            'https://google.com',
        'https://images.kslc.tech/blog-collection-cover/Vn7qzKSTDOen1wlImk6Dv'
        ),
        new Project(
            '3',
            'My Project 3',
            'This is a test project 3',
            'https://google.com',
        'https://images.kslc.tech/blog-collection-cover/Vn7qzKSTDOen1wlImk6Dv'
        ),
    ]

    return (
        <Box>
            <ProjectManageTable/>
        </Box>
    );
}

export default Test
