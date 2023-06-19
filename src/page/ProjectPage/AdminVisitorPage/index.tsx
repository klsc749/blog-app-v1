import { Box, Paper } from "@mui/material";
import ProjectManageTable from "../../../component/ProjectInfo/ProjectManageTable";

function ProjectManagePage(){
    return(
        <Box component={Paper} sx={{
            flexGrow: 1,
            marginLeft: '16px',
            marginRight: '16px',
        }}>
            <ProjectManageTable/>
        </Box>
    )
}

export default ProjectManagePage;