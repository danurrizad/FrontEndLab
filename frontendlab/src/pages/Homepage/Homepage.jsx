import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import jwt_decode from "jwt-decode"

export default function Homepage(){
    const [name, setName] = useState('')
    const [token, setToken] = useState('')
    const [expired, setExpired] = useState('')
    const navigate = useNavigate();
    
    

    return(
        <div class="text-center h-[100vh]">
            <div class="p-4">
                <div class="bg-[#388087] rounded-xl py-1"> 
                    <h1 class="font-bold text-white font-serif">Home</h1>
                </div>
                <p>Hi, {name}</p>
                <button class="bg-slate-600 py-1 px-4 text-white hover:bg-slate-800 rounded-xl">Get Users</button>
            </div>
        </div>
    )
}