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
  
  return (
    
    <>
      <div className="student">
        <div className="">
          <Navbar />
        </div>
        <div className="">
          <h1 className="text-center">Mahasiswa</h1>
          <div className="flex mt-4 justify-between gap-4">
            <div className="bg-white h-full">
              <div className="flex justify-between">
                <div className="text-lg font-semibold flex items-center">
                  <Link className="" to="/TambahProfil">
                    <button className="p-1">
                      + Tambahkan Mahasiswa Baru disini
                    </button>
                  </Link>
                </div>
                <div className="flex relative">
                  <div className="flex items-center items-end place-items-end searchs">
                    <form className="searchs" action="">
                      <div className="relative place-items-end justify-items-end">
                        <input
                          type="text"
                          placeholder="Cari Mahasiswa"
                          className="text-sm font-normal rounded-md border-2 border-gray-300 pr-3 pl-6 py-1 my-2 mx-4"
                        />
                      </div>
                    </form>
                    <button className="text-sm font-medium rounded-md border-2 border-gray-300 flex items-center px-2 py-1 hover:bg-dark my-2">
                      Search
                    </button>
                  </div>

                </div>
              </div>

              <div className="my-10 cont-table">
                <table className="w-full table-fixed text-center overflow-y-auto tablee">
                  <thead className="">
                    <tr className="border-b-2 border-gray-300">
                    <th className="w-1/5">NAMA</th>
                    <th className="w-1/5">NIM</th>
                    <th className="w-1/5">BATCH</th>
                    <th className="w-1/5">EMAIL</th>
                    <th className="w-1/5">PASSWORD</th>
                    <th className="w-1/6">NO HP</th>
                    <th className="w-1/6">NOMOR LABORATORIUM</th>
                    <th className="w-1/6">LABORATORIUM</th>
                    <th className="w-1/5">EDIT</th>
                    </tr>
                  </thead>
                  <tbody>
                  {student.map((dat) => {
                  return (
                    <tr className="py-8 border-b-2 border-gray-300">
                      <td className="w-1/5 text-center">
                        {dat.name}
                      </td>
                      <td className="w-1/5 text-center">
                        {dat.studentId}
                      </td>
                      <td className="w-1/5 text-left">
                        {dat.batch}
                      </td>
                      <td className="w-1/5 text-center">
                        {dat.email}
                      </td>
                      <td className="w-1/5 text-center pw-break">
                        {dat.password}
                      </td>
                      <td className="w-1/5 text-center">
                        {dat.phone}
                      </td>
                      <td className="w-1/5 text-center">
                        {dat.labNum}
                      </td>
                      <td className="w-1/5 text-center">
                        {dat.lab}
                      </td>
                      <td className="w-1/5 text-center">
                        {" "}
                        <Link
                          to={`editprofile/${dat.name}`}
                          className="font-bold text-birumuda mr-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => deleteStudent(dat._id)}
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
        </div>
      </div>
    </>
  )
}

export default Student;