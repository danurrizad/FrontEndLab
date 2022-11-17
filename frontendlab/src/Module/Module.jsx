import React, { useState, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiFilter } from "react-icons/hi";
import axios from "axios";
import { Link} from "react-router-dom";


const Module = () => {
    const [module, setModul] = useState([]);
      useEffect(() => {
        getModule();
      }, []);
    
      const getModule = async () => {
        const response = await axios.get("http://api-paw.bekisar.net/api/v1/modules");
        setModul(response.data.data);
      }; 

      const deleteModule = async (title) => {
        try {
          await axios.delete(`"http://api-paw.bekisar.net/api/v1/modules/633681c7041eb46a1ca51939/${title}`);
          getModule();
        } catch (error) {
          console.log(error);
        }
      };
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
                                <th width="350px" >Nama Modul</th>
                                <th width="150px" >Batch</th>
                                <th width="150px" >Hari</th>
                                <th width="250px" >Lab</th>
                                <th width="250px" >Semester</th>
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
                <tbody>
                    {module.map((dat) => {
                        if (dat.title === title) {
                            return (
                                <tr
                                    key={dat.title}
                                >
                                <td>
                                    {dat.batch}
                                </td>
                                <td>
                                    {dat.day}
                                </td>
                                <td>
                                    {dat.lab}
                                </td>
                                <td>
                                    {dat.semester}
                                </td>
                                <td>
                                    {dat.dateStart}
                                </td>
                                <td>
                                    {dat.quota}
                                </td>
                                <td>
                                    {" "}
                                    <Link
                                        to={`editmodule/${dat.title}`}
                                    >
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => deleteModule(dat.title)}
                                    >
                                        Delete
                                    </button>
                                    </td>
                                </tr>
                                  );
                                }
                              })}
                </tbody>    
            </>
        );
    };
export default Module;