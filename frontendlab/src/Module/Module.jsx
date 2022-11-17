import React, {useState, useEffect} from "react";
import './Module.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Module = () => {
    const [module, setModule] = useState([]);
  
    useEffect(() => {
      getModule();
      deleteModule();
    }, []); 
    
      const getModule = async () => {
        const response = await axios.get("http://api-paw.bekisar.net/api/v1/modules");
        setModule(response.data.data);
      }; 

      const deleteModule = async (id) => {
        console.log(id);
        try {
          await axios.delete(`http://api-paw.bekisar.net/api/v1/modules/${id}`);
          getModule();
        } catch (error) {
          console.log(error);
        }
      };
    return(
        <>
      <div className="module">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <div className="">
            <div className="">Modul</div>
            <div className=""></div>
            <div className="">
              <Link
                className=""
                to="/tambahmodul"
              >
                <button className="">
                  + Tambah Modul
                </button>
              </Link>
            </div>
            </div>
            <div className="flex mt-4 justify-between gap-4">
                  <div className="flex px-4">
                    <div className="flex items-center">
                      <form action="">
                        <div className="relative flex items-center">
                         aioutlinesearch
                          <input
                            type="text"
                            placeholder="Cari Produk"
                            className=" text-sm font-normal rounded-md border-2 border-gray-300 pr-3 pl-6 py-1 m-4"
                          />
                        </div>
                      </form>
                      <button className="text-sm font-medium rounded-md border-2 border-gray-300 flex items-center px-2 py-1">
                        <span className="p-1">
                          HiFilter
                        </span>
                        Filter
                      </button>
                    </div>
                  </div>
                </div>

                <div className="pb-10">
                  <table className="w-full table-fixed justify-center overflow-y-auto">
                    <thead className="">
                      <tr className="border-b-2 border-gray-300">
                        <th className="w-1/5">NAMA MODUL</th>
                        <th className="w-1/5">BATCH</th>
                        <th className="w-1/5">HARI</th>
                        <th className="w-1/5">LAB</th>
                        <th className="w-1/6">SEMESTER</th>
                        <th className="w-1/6">TANGGAL</th>
                        <th className="w-1/6">KUOTA</th>
                        <th className="w-1/5">EDIT</th>
                      </tr>
                    </thead>
                    <tbody>
                        {module.map((dat) => {
                          const tanggal = new Date(dat.dateStart).toDateString()
                            return (
                            <tr className="py-8 border-b-2 border-gray-300">
                                <td className="w-1/5 text-center">
                                    {dat.title}
                                </td>
                                <td className="w-1/5 text-center">
                                    {dat.batch}
                                </td>
                                <td className="w-1/5 text-left">
                                    {dat.day}
                                </td>
                                <td className="w-1/5 text-center">
                                    {dat.lab}
                                </td>
                                <td className="w-1/5 text-center">
                                    {dat.semester}
                                </td>
                                <td className="w-1/5 text-center">
                                    {tanggal}
                                </td>
                                <td className="w-1/5 text-center">
                                    {dat.quota}
                                </td>
                                <td className="w-1/5 text-center">
                                {" "}
                                <Link
                                  to={`editmodule/${dat.title}`}
                                  className="font-bold text-birumuda mr-2"
                                >
                                  Edit
                                </Link>
                                <button
                                  onClick={() => deleteModule(dat._id)}
                                  className="font-bold text-red-700"
                                >
                                  Delete
                                </button>
                                </td>
                            </tr>
                            );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
        </>
    )
}

export default Module;