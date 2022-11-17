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
                    <h5>Add Module</h5>
                    <form className="tableAddModule" onSubmit={saveModule}>
                        <tr>
                            <td><label>Nama Modul :</label></td>
                            <td><input 
                            className="inputNama"
                            type="text"
                            required 
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Masukkan Nama Modul"></input></td>
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
                            <Link to="/Module"><button className="btnBack">Back</button></Link>
                        </div>
                      </form>
          </div>
    )

}
export default TambahModul;