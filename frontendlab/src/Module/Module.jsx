import React from "react";
import './Module.css';

export default function Module(){
    return(
        <>
            <div className="praktikum-container">
                <h1 className="module-heading">Module</h1>
                <div className="module-container">
                    <div className="module-card">
                    <h2 className="module-title"> Module 
                    Title</h2>
                    <div className="module-details"> 
                        <p> This is text </p>
                        <div className="mo-btns"> View details
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}