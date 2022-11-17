import {React, useState} from "react";
import './TambahModul.css'
import { useNavigate } from "react-router-dom";

function TambahModul(){
        const [namaModul, setnamaModul] = useState("");
        const [batch, setBatch] = useState("");
        const [hari, setHari] = useState("");
        const [tempat, setTempat] = useState("");
        const [tanggal, setTanggal] = useState("");
        const [kuota, setKuota] = useState("");
        const [msg, setMsg] = useState("");
        const navigate = useNavigate();
      
        const saveModule = async (e) => {
          e.preventDefault();
          try {
            await axios.post("http://api-paw.bekisar.net/api/v1/modules", {
              namaModul,
              batch,
              hari,
              tempat,
              tanggal,
              kuota,
            });
            navigate("/module");
          } catch (error) {
            if (error.response) {
              setMsg(error.response.data.setMsg);
            }
          }
        };
    
    return(
        <div className="crud" onSubmit={saveModule}>
                    <h5>Add Module</h5>
                    <table className="tableAddModule">
                        <tr>
                            <td><label>Nama Modul :</label></td>
                            <td><input 
                            className="inputNama"
                            type={text}
                            value={namaModul}
                            onChange={(e) => setnamaModul(e.target.value)}
                            placeholder="Masukkan Nama Modul"></input></td>
                        </tr>
                        <tr>
                            <td><label>Batch :</label></td>
                            <td><input 
                            className="inputBatch"
                            type={number}
                            value={batch}
                            onChange={(e) => setBatch(e.target.value)}
                            placeholder="Masukkan Batch"></input></td>
                        </tr>
                        <tr>
                            <td><label>Hari :</label></td>
                            <td><input 
                            className="inputDay"
                            type={day}
                            value={hari}
                            onChange={(e) => setHari(e.target.value)}
                            placeholder="Masukkan Hari dalam angka"></input></td>
                        </tr>
                        <tr>
                            <td><label>Tempat :</label></td>
                            <td><input 
                            className="inputTempat"
                            type={text}
                            value={tempat}
                            onChange={(e) => setTempat(e.target.value)}
                            placeholder="Masukkan Tempat"></input></td>
                        </tr>
                        <tr>
                            <td><label>Tanggal :</label></td>
                            <td><input 
                            className="inputTanggal"
                            type={date}
                            value={tanggal}
                            onChange={(e) => setTanggal(e.target.value)}
                            placeholder="Masukkan Tanggal Batch Modul"></input></td>
                        </tr>
                        <tr>
                            <td><label>Kuota :</label></td>
                            <td><input 
                            className="inputKuota"
                            type={number}
                            value={kuota}
                            onChange={(e) => setKuota(e.target.value)}
                            placeholder="Masukkan Kuota Batch"></input></td>
                        </tr>
                    </table>
                    <div className="buttonsModule">
                        <button className="btnAdd" type="submit">Add Module</button>
                        <button className="btnUpdate">Update Module</button>
                        <button className="btnDelete">Delete Module</button>
                    </div>
                </div>
    )

}
export default TambahModul;