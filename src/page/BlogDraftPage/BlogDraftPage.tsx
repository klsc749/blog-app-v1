import {Box, Paper} from "@mui/material";
import BlogDraftTable from "../../component/BlogDraft/BlogDraftTable";

function BlogDraftPage(){
    return(
        <Box component={Paper} sx={{
            flexGrow: 1,
            marginLeft: '16px',
            marginRight: '16px',
        }}>
            <BlogDraftTable/>
        </Box>
    )
}

export default BlogDraftPage;