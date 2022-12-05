import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
    deleteStudent();
  }, []);

  const getStudent = async () => {
    const response = await axios.get("http://api-paw.bekisar.net/api/v1/students");
    setStudent(response.data.data);
  };

  const deleteStudent = async (_id) => {
    console.log(_id);
    try {
      await axios.delete(`http://api-paw.bekisar.net/api/v1/student/${_id}`);
      getStudent();
    } catch (error) {
      console.log(error);
    }
  };

  //SEARCH FUNCTION
  const [query, setQuery] = useState("");
  const [searchParam] = useState(["name", "studentId", "email"]);
  const search = (data) => {
    return data.filter((item) => 
        searchParam.some((key) => item[key].toLowerCase().includes(query))
    );
  }
  
  return (
    <>
      <div className="student p-4">
        <div className="">
          <div className="bg-[#388087] py-1 px-4 rounded-xl">
            <h1 className=" text-center font-serif font-bold text-white">Mahasiswa</h1>
          </div>
          <div className="flex mt-4 justify-between gap-4">
            <div className="bg-white rounded-xl shadow-sm w-full h-full p-4">
              <div className="flex justify-between">
                <div className="text-lg font-semibold flex items-center">
                  <Link to="tambahprofil" className="bg-[#6fb3b8] rounded-xl py-1 px-4 text-white hover:bg-[#4e7d81] hover:text-gray-400">
                    <button className="p-1">
                      + Tambahkan Mahasiswa Baru disini
                    </button>
                  </Link>
                </div>
                <div className="flex relative p-4">
                  <div className="flex items-center place-items-end searchs">
                    <div className="relative place-items-end justify-items-end">
                      <input
                        type="text"
                        placeholder="Cari Mahasiswa"
                        className="text-sm font-normal rounded-md border-2 border-gray-300 pr-3 pl-6 py-1 my-2 mx-4"
                        onChange={(e) => setQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div> 
              </div>

              <div className="pb-10 cont-table">
                <table className="w-full table-fixed text-left overflow-y-auto">
                  <thead className="bg-[#ecfcff] border-b-2 border-gray-300">
                    <tr className="border-b-2 border-gray-300 text-xs">
                      <th className="w-1/4 py-3 px-2">NAMA</th>
                      <th className="w-1/6">NIM</th>
                      <th className="w-1/12">BATCH</th>
                      <th className="w-1/4">EMAIL</th>
                      <th className="w-1/5">PASSWORD</th>
                      <th className="w-1/6 px-3">NO HP</th>
                      <th className="w-1/5">LABORATORIUM</th>
                      <th className="w-1/12">NO LAB</th>
                      <th className="w-1/6">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                  {search(student).map((dat) => {
                  return (
                    <tr className="py-8 border-b-2 border-gray-300 text-xs">
                      <td className="px-2 text-left">
                        {dat.name}
                      </td>
                      <td className="text-left">
                        {dat.studentId}
                      </td>
                      <td className="text-left">
                        {dat.batch}
                      </td>
                      <td className=" text-left">
                        {dat.email}
                      </td>
                      <td className="text-left pw-break">
                        {dat.password}
                      </td>
                      <td className="px-3 text-left">
                        {dat.phone}
                      </td>
                      <td className="text-left">
                        {dat.lab}
                      </td>
                      <td className="px-3 text-left">
                        {dat.labNum}
                      </td>
                      <td className=" text-left">
                        {" "}
                        <Link
                          to={`editprofile/${dat.name}`}
                          className="font-bold text-slate-50 mr-2 bg-sky-600 py-1.5 px-3 decoration-transparent hover:bg-sky-800 hover:text-yellow-400"
                        >
                          Edit
                        </Link>
                        <Link
                          onClick={() => deleteStudent(dat._id)}
                          className="font-bold text-slate-50 bg-red-600 py-1.5 px-2 decoration-transparent hover:bg-red-800 hover:text-yellow-400"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student;