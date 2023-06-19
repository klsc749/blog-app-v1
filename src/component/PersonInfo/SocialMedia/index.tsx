import { Box } from "@mui/material";
import CustomIcon from "./CustomIcon";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from "./LinkIcon";
import QRCodeIcon from "./QRIcon/QRIcon";

const QQIcon = {
    name: "QQ",
    icon: <CustomIcon src="https://images.kslc.tech/icon/QQ.svg" alt="QQ" />,
    qrCodeImage: "https://images.kslc.tech/QRcode/qqQRCode.png",
    tooltipTitle: "QQ"
}

const WeChatIcon = {
    name: "WeChat",
    icon: <CustomIcon src="https://images.kslc.tech/icon/wechat-fill.svg" alt="WeChat" />,
    qrCodeImage: "https://images.kslc.tech/QRcode/WeCharQR.png",
    tooltipTitle: "WeChat"
}

const CusGitHubIcon = {
    icon: <GitHubIcon />,
    link: "https://github.com/klsc749"
}

const BilibiliIcon = {
    icon: <CustomIcon src="https://images.kslc.tech/icon/bilibili.svg" alt="Bilibili" />,
    link: "https://space.bilibili.com/225561843"
}

function SocialMedia() {
    return (
        <Box display="flex" 
            justifyContent="space-between" 
            sx={{ background: 'rgba(210, 230, 250, 0.8)', borderRadius: '12px', }}>
            <LinkIcon {...BilibiliIcon} />
            <LinkIcon {...CusGitHubIcon} />
            <QRCodeIcon {...QQIcon} />
            <QRCodeIcon {...WeChatIcon} />
        </Box>
    )
}

export default SocialMedia;