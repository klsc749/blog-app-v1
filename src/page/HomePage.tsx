import React from "react";
import BlogItemsPage from "./BlogItemsPage/BlogItemsPage";
import WordnikCard from "../component/WordnikCard";
import { Box, Grid } from "@mui/material";
import PersonInfoComponent from "../component/PersonInfo";



function HomePage() {
    return (
        <Grid container spacing={2} paddingRight={2}>
            <Grid item xs={12} md={8}>
                <BlogItemsPage />
            </Grid>
            <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'block' } }}>
                <Box display="flex" flexDirection="column" gap={2}>
                    <PersonInfoComponent />
                    <WordnikCard />
                </Box>
            </Grid>
        </Grid>
    )
}

export default HomePage;