import {React, useState, useEffect} from "react";
import axios from "axios";
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router-dom";

export default function Homepage(){
    const [name, setName] = useState('')
    const [token, setToken] = useState('')
    const [expired, setExpired] = useState('')
    const navigate = useNavigate();
    
    

    return(
        <div class="text-center ml-[40px] h-[100vh]">
            <h1>Home</h1>
            <p>Hi, {name}</p>
            <button class="bg-slate-600">Get Users</button>
        </div>
    )
}