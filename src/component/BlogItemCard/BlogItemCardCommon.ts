export const root = {
    p: 2,
    mb: 2,
    transition: '0.3s',
    borderRadius: '12px',
    '&:hover': {
        transform: "scale(1.04)",
        cursor: 'pointer',
        background: "rgba(210, 230, 250, 1)", // Set the alpha value to 1 when hovered
        backdropFilter: "blur(0px)", // Remove the Gaussian blur when hovered
    },
    background: 'rgba(210, 230, 250, 0.8)', // Lighter gradient background
    backdropFilter: 'blur(10px)', // Gaussian blur
    paddingLeft: '8px',
    paddingRight: '8px',
};
