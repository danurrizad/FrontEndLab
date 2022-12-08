import { Link } from "react-router-dom";
import React from "react";

const NotFound = () => {
    return(
        <div className="text-center h-screen">
            <h2 class="">404 Page Not Found </h2>
            <p>Page that you search for is not found here...</p>
            <Link to="/home">Back to home</Link>
        </div>
    )
}

export default NotFound;