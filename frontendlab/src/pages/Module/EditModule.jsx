import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

import axios from "axios";

function EditModul() {
    const [title, setTitle] = useState("");
    const [batch, setBatch] = useState("");
    const [day, setDay] = useState("");
    const [lab, setLab] = useState("");
    const [semester, setSemester] = useState("");
    const [dateStart, setdateStart] = useState("");
    const [quota, setQuota] = useState("");
    const { _id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
      setTitle(localStorage.getItem('Title'))
      setBatch(localStorage.getItem('Batch'));
      setDay(localStorage.getItem('Day'));
      setLab(localStorage.getItem('Lab'));
      setSemester(localStorage.getItem('Semester'));
      setdateStart(localStorage.getItem('Date Start'));
      setQuota(localStorage.getItem('Quota'));
      getModulById();
    }, []);


  const saveModule = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://api-paw.bekisar.net/api/v1/modules/${_id}`, {
        title,
        batch,
        day,
        lab,
        semester,
        dateStart,
        quota,
      });
      navigate("/admin-module");
      toast.success('Modul berhasil diupdate!', {
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
        console.log(error)
        navigate("/admin-module");
        toast.error('Modul tidak berhasil diupdate!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
  };


  const getModulById = async () => {
    const response = await axios.get(`https://api-paw.bekisar.net/api/v1/modules/${_id}`);
    setTitle(response.data.title);
    setBatch(response.data.batch);
    setDay(response.data.day);
    setLab(response.data.lab);
    setSemester(response.data.semester);
    setdateStart(response.data.dateStart);
    setQuota(response.data.quota);
  };

  return (
      <div className="bg-[#f6f6f2] min-h-screen p-10">
        <div className="crud">
          <div className="content-center items-center">
            <center><h1 className="font-bold pb-4">Edit Module</h1></center>
            <div className="flex-col w-full h-140 rounded-md shadow-md bg-white p-7">
              <form className="flex flex-col gap-2" onSubmit={saveModule}>
                <div className="flex flex-col">
                  <label
                    className="text-base font-medium text-gray"
                    htmlFor="Nama Modul"
                  >
                    Nama Modul
                  </label>
                  <input
                    className="border-b-2 w-full p-1 text-gray-500 bg-white"
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    name="title"
                    placeholder="Masukkan Nama Modul"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-base font-medium text-gray"
                    htmlFor="Batch"
                  >
                    Batch
                  </label>
                  <input
                    className="border-b-2 w-full p-1 text-gray-500 bg-white"
                    id="Batch"
                    type="number"
                    value={batch}
                    onChange={(e) => setBatch(e.target.value)}
                    name="Batch"
                    placeholder="Masukkan Batch"
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    className="text-base font-medium text-gray"
                    htmlFor="Hari"
                  >
                    Hari
                  </label>
                  <input
                    className="border-b-2 w-full p-1 text-gray-500 bg-white"
                    id="Hari"
                    type="number"
                    value={day}
                    onChange={(e) => setDay(e.target.value)}
                    name="Hari"
                    placeholder="Masukkan Hari dalam Angka (Senin = 1)"
                  />
                </div>
                <div className="flex flex-col">
                    <label
                      className="text-base font-medium text-gray"
                      htmlFor="Lab"
                    >
                      Lab
                    </label>
                    <input
                      className="border-b-2 w-full p-1 text-gray-500 bg-white"
                      id="Lab"
                      type="text"
                      value={lab}
                      onChange={(e) => setLab(e.target.value)}
                      name="Lab"
                      placeholder="Masukkan Lab"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-base font-medium text-gray"
                      htmlFor="Semester"
                    >
                      Semester
                    </label>
                    <input
                      className="border-b-2 w-full p-1 text-gray-500 bg-white"
                      id="Semester"
                      type="number"
                      value={semester}
                      onChange={(e) => setSemester(e.target.value)}
                      name="Semester"
                      placeholder="Masukkan Semester"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-base font-medium text-gray"
                      htmlFor="Tanggal"
                    >
                      Tanggal
                    </label>
                    <input
                      className="border-b-2 w-full p-1 text-gray-500 bg-white"
                      id="Tanggal"
                      type="date"
                      value={dateStart}
                      onChange={(e) => setdateStart(e.target.value)}
                      name="Tanggal"
                      placeholder="Masukkan Tanggal Batch Modul Dilaksanakan"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      className="text-base font-medium text-gray"
                      htmlFor="Masukkan Kuota Batch"
                    >
                      Kuota
                    </label>
                    <input
                      className="border-b-2 w-full p-1 text-gray-500 bg-white"
                      id="Kuota"
                      type="number"
                      value={quota}
                      onChange={(e) => setQuota(e.target.value)}
                      name="Kuota"
                      placeholder="Masukkan kuota"
                    />
                  </div>
                <div className="buttonsModule justify-center flex items-center gap-3">
                  <button
                    className="rounded-[50px] py-1 px-14 bg-[#388087] text-white hover:bg-cyan-900"
                    type="submit"
                  >
                    Edit
                  </button>
                  <Link to="/admin-module">
                    <button className="rounded-[50px] decoration-0 py-1 px-14 bg-[#388087] text-white hover:bg-cyan-900">
                      Batal
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}

export default EditModul;