import {React, useState} from "react";
import {Link} from 'react-router-dom';  
import './Module.css';
//import axios from 'axios';



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
                                <th width="150px" >Hari</th>
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
                <div className="btnGetAddModul">
                    <Link to='/TambahModul'>
                     <button >+ Add Modul</button>
                    </Link>
                </div>
            </div>
        </>
    )
}