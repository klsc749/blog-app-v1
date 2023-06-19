import { Card, CardHeader, Avatar, Typography, CardContent, Box } from "@mui/material";
import { useEffect, useState } from "react";
import BlogServiceApi from "../../service/visitor/BlogApi";
import TagCount from "./TagCount";
import BlogCount from "./BlogCount";
import CategoryCount from "./CategoryCount";
import SocialMedia from "./SocialMedia";

interface PersonalInfoProps {
  avatarUrl: string;
  name: string;
  signature: string;
}

const PersonInfo: PersonalInfoProps = {
  avatarUrl: "https://images.kslc.tech/avatar/91523918_p0.jpg?imageView2/0/format/webp/q/40",
  name: "KSLC",
  signature: "会点后端开发😣。略懂游戏设计和开发，计算机图形学💕"
};

function PersonInfoComponent() {
  return (
    <div>
      <PersonInfoCard {...PersonInfo} />
    </div>
  );
}

function PersonInfoCard(props: PersonalInfoProps) {
  return (
    <Box sx={{ marginBottom: "24px" }}>
      <Card sx={{ marginBottom: "24px" }}>
        <CardHeader
          avatar={<Avatar src={props.avatarUrl} sx={{ width: 100, height: 100 }} />}
          title={
            <Typography variant="h4" sx={{ fontSize: "36px" }}>
              {props.name}
            </Typography>
          }
          subheader={props.signature}
          titleTypographyProps={{ mb: 4 }}
          sx={{ backgroundColor: "#f5f5f5", padding: "28px" }}
        />
        <CardContent>
          <Box display="flex" justifyContent="space-between" margin="auto">
            <BlogCount />
            <TagCount />
            <CategoryCount />
          </Box>
        </CardContent>
      </Card>
      <Box sx={{ marginTop: "24px" }}>
        <SocialMedia />
      </Box>
    </Box>
  );
}

export default PersonInfoComponent;