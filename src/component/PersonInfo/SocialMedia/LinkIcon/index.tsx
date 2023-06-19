import { IconButton, Link } from "@mui/material";

interface LinkIconProps {
  icon: JSX.Element;
  link: string;
}

function LinkIcon({ icon, link }: LinkIconProps) {
  return (
    <Link href={link} target="_blank" rel="noopener">
      <IconButton>{icon}</IconButton>
    </Link>
  );
}

export default LinkIcon;