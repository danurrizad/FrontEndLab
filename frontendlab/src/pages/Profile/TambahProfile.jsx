import {useState} from 'react';
//import './Profil.css';
import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import { toast } from 'react-toastify';

function TambahProfil(){
    //state for registration 
    const [name, setName] = useState('');
    const [studentId, setStudentId] = useState('');
    const [batch, setBatch] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [labNum, setLabNum]=useState ('');
    const [lab, setLab]=useState('');
    const navigate = useNavigate();


    const saveProfile = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://api-paw.bekisar.net/api/v1/students", {
            name,
            studentId,
            batch,
            email,
            password,
            phone,
            labNum,
            lab,
          });
          navigate("/student");
          toast.success('Mahasiswa berhasil ditambahkan!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        } catch (error) {
          console.log(error)
          toast.error('Mahasiswa tidak berhasil ditambahkan!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
        }
      };
    
      return(
        <div className="crud">
            <div className=''>
                <h3 className='text-center w-1/2'>Add Student</h3>
                <div className='bg-white p-3 rounded-xl shadow-md w-1/2'>
                    <form className="tableAddStudent" onSubmit={saveProfile}>
                        <tr className='flex flex-col'>
                            <td><label 
                            className="text-base font-medium text-gray"
                            >Nama</label></td>
                            <td><input 
                            className="inputNama border-b-2 w-full p-1 text-gray-500 bg-white"
                            type="text"
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukkan Nama Siswa"></input></td>
                        </tr>
                        <tr className='flex flex-col'>
                            <td>
                                <label className="text-base font-medium text-gray">NIM</label>
                            </td>
                            <td><input 
                                className="inputNIM border-b-2 w-full p-1 text-gray-500 bg-white"
                                type="text"
                                required 
                                value={studentId}
                                onChange={(e) => setStudentId(e.target.value)}
                                placeholder="Masukkan NIM"></input>
                            </td>
                        </tr>
                        <tr className='flex flex-col'>
                            <td>
                                <label className="text-base font-medium text-gray">Batch</label>
                            </td>
                            <td><input 
                            className="inputBatch border-b-2 w-full p-1 text-gray-500 bg-white"
                            type="number"
                            required
                            value={batch}
                            onChange={(e) => setBatch(e.target.value)}
                            placeholder="Masukkan Batch"></input></td>
                        </tr>
                        <tr className='flex flex-col'>
                            <td>
                                <label className="text-base font-medium text-gray">Email</label>
                            </td>
                            <td><input 
                            className="inputEmail border-b-2 w-full p-1 text-gray-500 bg-white"
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Masukkan Email"></input></td>
                        </tr>
                        <tr className='flex flex-col'>
                            <td>
                                <label className="text-base font-medium text-gray">Password</label>
                            </td>
                            <td><input 
                            className="inputPassword border-b-2 w-full p-1 text-gray-500 bg-white"
                            type="text"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Masukkan Password"></input></td>
                        </tr>
                        <tr className='flex flex-col'>
                            <td>
                                <label className="text-base font-medium text-gray">No HP</label>
                            </td>
                            <td><input 
                            className="inputPhone border-b-2 w-full p-1 text-gray-500 bg-white"
                            type="text"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Masukkan Nomor Hp"></input></td>
                        </tr>
                        <tr className='flex flex-col'>
                            <td>
                                <label className="text-base font-medium text-gray">Nomor Laboratorium</label>
                            </td>
                            <td><input 
                            className="inputLabNum border-b-2 w-full p-1 text-gray-500 bg-white"
                            type="number"
                            required
                            value={labNum}
                            onChange={(e) => setLabNum(e.target.value)}
                            placeholder="Masukkan Laboratorium"></input></td>
                        </tr>
                        <tr className='flex flex-col'>
                            <td>
                                <label className="text-base font-medium text-gray">Laboratorium</label>
                            </td>
                            <td><input 
                            className="inputLab border-b-2 w-full p-1 text-gray-500 bg-white"
                            type="text"
                            required
                            value={lab}
                            onChange={(e) => setLab(e.target.value)}
                            placeholder="Masukkan Laboratorium"></input></td>
                        </tr>
                    
                        <div className="py-4 justify-center flex gap-4">
                            <button className="bg-[#388087] text-white py-1 px-4 rounded-[50px] hover:bg-[#213d43]" type="submit">Add Profile</button>
                            <Link to="/profile"><button className="bg-[#388087] text-white decoration-transparent py-1 px-4 rounded-[50px] hover:bg-[#213d43]">Batal</button></Link>
                        </div>
                    </form>
                </div>
            </div>
          </div>
    )

}
export default TambahProfil;
