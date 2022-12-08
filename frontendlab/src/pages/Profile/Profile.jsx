import React from "react";
import './Profil.css';

export default function Profile(){
    return(
        <div>
            <div className="absolute">
              <Sidenav />
            </div>
            <div class="profile">
                <h1>Profile</h1>
            </div>
        </div>
    )
}