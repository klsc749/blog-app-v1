import { SvgIcon } from "@mui/material";

interface CustomIconProps {
  src: string;
  alt: string;
}

function CustomIcon({ src, alt }: CustomIconProps) {
  return (
    <img src={src} alt={alt} style={{ height: 24, width: 24 }} />
  );
}

export default CustomIcon;