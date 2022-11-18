import {React, useState} from "react";
import './TambahModul.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

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
          } catch (error) {
            console.log(error)
          }
        };
    
    return(
        <div className="crud">
            <div className="content-center w-1/2 items-center">
                <h1 className="font-bold pb-4">Tambah Module</h1>
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
                        <tr>
                            <td><label 
                            className="text-base font-medium text-gray"
                            htmlFor="Nama Modul">Batch</label></td>
                            <td><input 
                            className="inputBatch"
                            type="number"
                            required
                            value={batch}
                            onChange={(e) => setBatch(e.target.value)}
                            placeholder="Masukkan Batch"></input></td>
                        </tr>
                        <tr>
                            <td><label>Hari :</label></td>
                            <td><input 
                            className="inputDay"
                            type="number"
                            required
                            value={day}
                            onChange={(e) => setDay(e.target.value)}
                            placeholder="Masukkan Hari dalam angka"></input></td>
                        </tr>
                        <tr>
                            <td><label>Lab :</label></td>
                            <td><input 
                            className="inputLab"
                            type="text"
                            required
                            value={lab}
                            onChange={(e) => setLab(e.target.value)}
                            placeholder="Masukkan Lab"></input></td>
                        </tr>
                        <tr>
                            <td><label>Semester :</label></td>
                            <td><input 
                            className="inputSemester"
                            type="number"
                            required
                            value={semester}
                            onChange={(e) => setSemester(e.target.value)}
                            placeholder="Masukkan Semester"></input></td>
                        </tr>
                        <tr>
                            <td><label>Tanggal :</label></td>
                            <td><input 
                            className="inputTanggal"
                            type="date"
                            required
                            value={dateStart}
                            onChange={(e) => setdateStart(e.target.value)}
                            placeholder="Masukkan Tanggal Batch Modul"></input></td>
                        </tr>
                        <tr>
                            <td><label>Quota :</label></td>
                            <td><input 
                            className="inputKuota"
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