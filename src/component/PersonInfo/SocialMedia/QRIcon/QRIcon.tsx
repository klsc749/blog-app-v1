import { useState } from "react";
import { IconButton, Tooltip } from "@mui/material";

interface QRCodeIconProps {
    icon: JSX.Element;
    qrCodeImage: string;
    tooltipTitle: string;
}

function QRCodeIcon({ icon, qrCodeImage, tooltipTitle }: QRCodeIconProps) {
    const [showTooltip, setShowTooltip] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    return (
        <Tooltip
            title={<img src={qrCodeImage} alt={tooltipTitle} style={{ width: 200, height: 200 }} />}
            open={showTooltip}
            onClose={handleMouseLeave}
            disableFocusListener
            disableHoverListener
            disableTouchListener
            arrow
        >
            <IconButton onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {icon}
            </IconButton>
        </Tooltip>
    );
}

export default QRCodeIcon;
