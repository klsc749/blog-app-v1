import { Box, Typography, Skeleton } from "@mui/material";
import { useState, useEffect } from "react";
import BlogServiceApi from "../../../service/visitor/BlogApi";

function TagCount() {
  const [tagCount, setTagCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTagCount();
  }, []);

  function getTagCount() {
    BlogServiceApi.getTagNum().then((res) => {
      if (res && res.code === 200) {
        setTagCount(res.data);
      }
      setLoading(false);
    });
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography variant="body1" sx={{ fontWeight: "bold" }}>
        标签
      </Typography>
      {loading ? (
        <Skeleton variant="text" width={50} />
      ) : (
        <Typography variant="body1">{tagCount}</Typography>
      )}
    </Box>
  );
}

export default TagCount;