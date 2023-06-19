import Login from "../component/Login";
import React from "react";
const root : React.CSSProperties = {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
    backgroundImage: `url(https://images.kslc.tech/background/background2.jpg?imageView2/0/format/webp/q/10)`,
    backgroundSize: 'cover', // This will ensure the image covers the whole div
    backgroundPosition: 'center', // This will center the image
    backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
}
function LoginPage(){
    return (
        <div style={root}>
            <Login/>
        </div>
    )
}

export default LoginPage;