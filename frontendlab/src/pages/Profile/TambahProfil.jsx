import {useState} from 'react';
import './Profil.css';
import React from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

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
        } catch (error) {
          console.log(error)
        }
      };
    
      return(
        <div className="crud">
                    <h5>Add Student</h5>
                    <form className="tableAddStudent" onSubmit={saveProfile}>
                        <tr>
                            <td><label>Nama :</label></td>
                            <td><input 
                            className="inputNama"
                            type="text"
                            required 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Masukkan Nama Siswa"></input></td>
                        </tr>
                        <tr>
                            <td><label>NIM :</label></td>
                            <td><input 
                            className="inputNIM"
                            type="text"
                            required 
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            placeholder="Masukkan NIM"></input></td>
                        </tr>
                        <tr>
                            <td><label>Batch :</label></td>
                            <td><input 
                            className="inputBatch"
                            type="number"
                            required
                            value={batch}
                            onChange={(e) => setBatch(e.target.value)}
                            placeholder="Masukkan Batch"></input></td>
                        </tr>
                        <tr>
                            <td><label>Email :</label></td>
                            <td><input 
                            className="inputEmail"
                            type="text"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Masukkan Email"></input></td>
                        </tr>
                        <tr>
                            <td><label>Password :</label></td>
                            <td><input 
                            className="inputPassword"
                            type="text"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Masukkan Password"></input></td>
                        </tr>
                        <tr>
                            <td><label>No Hp :</label></td>
                            <td><input 
                            className="inputPhone"
                            type="text"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Masukkan Nomor Hp"></input></td>
                        </tr>
                        <tr>
                            <td><label>Nomor Laboratorium :</label></td>
                            <td><input 
                            className="inputLabNum"
                            type="number"
                            required
                            value={labNum}
                            onChange={(e) => setLabNum(e.target.value)}
                            placeholder="Masukkan Laboratorium"></input></td>
                        </tr>
                        <tr>
                            <td><label>Laboratorium :</label></td>
                            <td><input 
                            className="inputLab"
                            type="text"
                            required
                            value={lab}
                            onChange={(e) => setLab(e.target.value)}
                            placeholder="Masukkan Laboratorium"></input></td>
                        </tr>
                    
                        <div className="buttonsProfile">
                            <button className="btnAdd" type="submit">Add Profile</button>
                            <button className="btnUpdate">Update Profile</button>
                            <button className="btnDelete">Delete Profile</button>
                        </div>
                      </form>
          </div>
    )

}
export default TambahProfil;
