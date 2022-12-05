import {React, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoDteti from "../assets/images/logo-dteti-dashboard.png";
import axios from "axios";

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState();
    const navigate = useNavigate();

    const Auth = async(e) => {
        e.preventDefault();
        try{
            await axios.post('http://api-paw.bekisar.net/api/v1/auth/login',{
                email: email,
                password: password,
            });
            navigate("/home");
    
        } catch (error) {
            if(error.response){
                console.log(error.response.data.msg)
                setMsg(error.response.data.msg)
            }
        }
    }
    return(
        <section class="h-screen z-50 inset-0 bg-[#f6f6f2]">
        <div class="px-6 text-gray-800 container flex items-center justify-center h-screen">
            <div class="flex xl:justify-center lg:justify-center justify-center items-center flex-wrap g-2 w-full bg-white rounded-xl p-5 shadow-lg">
                <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-2/3 lg:w-2/3 md:w-2/3 mb-12 md:mb-0">
                    <img
                    src={LogoDteti}
                    class="w-2/3 sm:text-center"
                    alt="Logo DTETI"
                    />
                </div>
                <div class="px-">
                    <form onSubmit={Auth} class="bg-white p-5 border-2 border-double shadow-sm">
                        <h1 class="text-center">{msg}</h1>
                        <div class="flex flex-row items-center justify-center lg:justify-center">
                            <h2 class="text-lg mb-4 mr-4">Login</h2>
                        </div>
                        <div class="mb-6">
                            <input
                            type="text"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Email address"
                            required
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                        <div class="mb-6">
                            <input
                            type="password"
                            class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            id="exampleFormControlInput2"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
                        </div>
                        

                        <div class="text-center">
                            <button
                            type="submit"
                            class="px-7 py-2 bg-[#9bace6] text-black font-medium text-sm  uppercase rounded shadow-md hover:bg-[#5472d6] hover:shadow-lg focus:bg-[#5472d6] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                            >
                            Login
                            </button>
                            <div className="justify-center ">
                                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                                Don't have an account?
                                </p>
                                <Link 
                                    to="/register"
                                    
                                >
                                Register here
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </section>
    )
}
export default Login;
