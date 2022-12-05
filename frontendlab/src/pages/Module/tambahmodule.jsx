import {React, useState} from "react";
import './tambahmodule.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import {toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

function TambahModul(){
        const [title, setTitle] = useState("");
        const [batch, setBatch] = useState("");
        const [day, setDay] = useState("");
        const [lab, setLab] = useState("");
        const [semester, setSemester] = useState("");
        const [dateStart, setdateStart] = useState("");
        const [quota, setQuota] = useState("");
        const navigate = useNavigate();
      
        const saveModule = async (e) => {
          e.preventDefault();
          try {
            await axios.post("http://api-paw.bekisar.net/api/v1/modules", {
              title,
              batch,
              day,
              lab,
              semester,
              dateStart,
              quota,
            });
            navigate("/module");
            toast.success('Modul berhasil ditambahkan!', {
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
            navigate("/module");
            toast.error('Modul tidak berhasil ditambahkan!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            console.log(error)
          }
        };
    
    return(
        <div className="crud">
            <div className="content-center items-center">
                <center><h1 className="font-bold pb-4">Tambah Module</h1></center>
                <div className="flex-col w-full h-140 rounded-md shadow-md bg-white p-7">
                    <form className="flex flex-col gap-2" onSubmit={saveModule}>
                        <tr className="flex flex-col">
                            <td><label 
                            className="text-base font-medium text-gray"
                            htmlFor="Nama Modul">Nama Modul</label></td>
                            <td><input 
                            className="border-b-2 w-full p-1 text-gray-500 bg-white"
                            id="title"
                            type="text"
                            required 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            name="title"
                            placeholder="Masukkan Nama Modul"></input></td>
                        </tr>
                        <tr className="flex flex-col">
                            <td><label 
                            className="text-base font-medium text-gray"
                            htmlFor="Nama Modul">Batch</label></td>
                            <td><input 
                            className="border-b-2 w-full p-1 text-gray-500 bg-white"
                            id="Batch"
                            type="number"
                            required
                            value={batch}
                            onChange={(e) => setBatch(e.target.value)}
                            name="Batch"
                            placeholder="Masukkan Batch"></input></td>
                        </tr>
                        <tr className="flex flex-col">
                            <td><label
                            className="text-base font-medium text-gray"
                            htmlFor="Hari">Hari</label></td>
                            <td><input 
                            className="border-b-2 w-full p-1 text-gray-500 bg-white"
                            id="Hari"
                            type="number"
                            required
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            placeholder="Masukkan Hari dalam Angka (Senin = 1)"></input></td>
                        </tr>
                        <tr className="flex flex-col">
                            <td><label
                            className="text-base font-medium text-gray"
                            htmlFor="Lab">Lab</label></td>
                            <td><input 
                            className="border-b-2 w-full p-1 text-gray-500 bg-white"
                            id="Lab"
                            type="text"
                            required
                            value={lab}
                            onChange={(e) => setLab(e.target.value)}
                            placeholder="Masukkan Lab"></input></td>
                        </tr>
                        <tr className="flex flex-col">
                            <td><label
                            className="text-base font-medium text-gray"
                            htmlFor="Semester">Semester</label></td>
                            <td><input 
                            className="border-b-2 w-full p-1 text-gray-500 bg-white"
                            id="Semester"
                            type="number"
                            required
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            placeholder="Masukkan Semester"></input></td>
                        </tr>
                        <tr className="flex flex-col">
                            <td><label
                            className="text-base font-medium text-gray"
                            htmlFor="Tanggal">Tanggal</label></td>
                            <td><input 
                            className="border-b-2 w-full p-1 text-gray-500 bg-white"
                            id="Tanggal"
                            type="date"
                            required
                            value={dateStart}
                            onChange={(e) => setdateStart(e.target.value)}
                            placeholder="Masukkan Tanggal Batch Modul Dilaksanakan"></input></td>
                        </tr>
                        <tr className="flex flex-col">
                            <td><label
                            className="text-base font-medium text-gray"
                            htmlFor="Kuota">Kuota</label></td>
                            <td><input 
                            className="border-b-2 w-full p-1 text-gray-500 bg-white"
                            id="Kuota"
                            type="number"
                            required
                            value={quota}
                            onChange={(e) => setQuota(e.target.value)}
                            placeholder="Masukkan Kuota Batch"></input></td>
                        </tr>
                        <div className="buttonsModule">
                            <button className="btnAdd" type="add">Tambah</button>
                            <Link to="/Module"><button className="btnBack">Batal</button></Link>
                        </div>
                      </form>
                    </div>
                </div>
          </div>
    )

}
export default TambahModul;