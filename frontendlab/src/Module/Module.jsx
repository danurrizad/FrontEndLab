import {React, useState} from "react";
import './Module.css';

export default function Module(){
    return(
        <>
            <div class="module">
                <div className="title">
                    <h1>Modules</h1>
                </div>
                <div className="tableModule">
                    <table>
                        <thead>
                            <tr align="center">
                                <th width="50px" >No</th>
                                <th width="350px" >Nama Praktikum</th>
                                <th width="150px" >Batch</th>
                                <th width="150px" >Day</th>
                                <th width="250px" >Tempat</th>
                                <th width="250px" >Tanggal</th>
                                <th width="250px" >Kuota</th>
                            </tr>
                        </thead>

                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                </div>
                <div className="crud">
                    <h5>Add Module</h5>
                    <table className="tableAddModule">
                        <tr>
                            <td><label>Nama Praktikum :</label></td>
                            <td><input className="inputNama"></input></td>
                        </tr>
                        <tr>
                            <td><label>Batch :</label></td>
                            <td><input className="inputBatch"></input></td>
                        </tr>
                        <tr>
                            <td><label>Day :</label></td>
                            <td><input className="inputDay"></input></td>
                        </tr>
                        <tr>
                            <td><label>Tempat :</label></td>
                            <td><input className="inputTempat"></input></td>
                        </tr>
                        <tr>
                            <td><label>Tanggal :</label></td>
                            <td><input className="inputTanggal"></input></td>
                        </tr>
                        <tr>
                            <td><label>Kuota :</label></td>
                            <td><input className="inputKuota"></input></td>
                        </tr>
                    </table>
                    <div className="buttonsModule">
                        <button className="btnAdd">Add Module</button>
                        <button className="btnUpdate">Update Module</button>
                        <button className="btnDelete">Delete Module</button>
                    </div>
                </div>
            </div>
        </>
    )
}