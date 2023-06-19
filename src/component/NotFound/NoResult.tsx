import React from "react";

function NoResult() {
    return (
        <div style={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            background: 'rgba(210, 230, 250, 0.8)',
            backdropFilter: 'blur(10px)'}}>
            <p style={{ fontSize: "18px", fontWeight: "bold", color: "#999" }}>No results found.</p>
        </div>
    );
}

export default NoResult;