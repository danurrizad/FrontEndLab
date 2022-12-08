import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Modal from "../../components/Modal";

const Student = () => {
  const [student, setStudent] = useState([]);

  useEffect(() => {
    getStudent();
    deleteStudent();
  }, []);

  const getStudent = async () => {
    const response = await axios.get(`http://api-paw.bekisar.net/api/v1/students`);
    setStudent(response.data.data);
  };

  const setUpdate = async(dat) => {
    let { name,
      studentId,
      batch,
      email,
      password,
      phone,
      labNum,
      lab} = dat ;
    localStorage.setItem('Name', name);
    localStorage.setItem('Student Id', studentId);
    localStorage.setItem('Batch', batch);
    localStorage.setItem('Email', email);
    localStorage.setItem('Password', password);
    localStorage.setItem('Phone', phone);
    localStorage.setItem('Lab Num', labNum);
    localStorage.setItem('Lab', lab);
  };
  const deleteStudent = async (_id) => {
    console.log(_id);
    try {
      await axios.delete(`http://api-paw.bekisar.net/api/v1/students/${_id}`);
      getStudent();
    } catch (error) {
      console.log(error);
    }
  };

  //START OF MODAL
  const idModulRef = useRef();
  const [showModal, setShowModal] = useState({
    message:"",
    nameStudent:"",
    isLoading:false
  });

  const handleModal = (message, nameModuleOrStudent, isLoading) => {
    setShowModal({
      message,
      nameModuleOrStudent,
      isLoading,
    })
  }

  const handleDelete = (_id, name) => {
    handleModal("Are you sure want to delete this?", name, true);
    idModulRef.current = _id;
  };

  const confirmDelete = (yes) =>{
    if(yes){
      try{
        console.log(idModulRef.current);
        deleteStudent(idModulRef.current);
        handleModal("", false);
        toast.success('Mahasiswa berhasil dihapus!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }catch(error){
       console.log(error); 
       handleModal("", false);
       toast.error('Mahasiswa tidak berhasil dihapus!', {
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
    }
    else{
      handleModal("", false);
    }

  }
  //END OF MODAL

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
                  <Link to="tambahprofile" className="bg-[#6fb3b8] rounded-xl py-1 px-4 text-white hover:bg-[#4e7d81] hover:text-gray-400">
                    <button>
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
                    <tr className="border-b-2 border-gray-300 text-sm font-bold">
                      <th className="w-1/12 py-3 px-2">No.</th>
                      <th className="w-1/4 py-3 px-2">Nama</th>
                      <th className="w-1/6">NIM</th>
                      <th className="w-1/12 px-2">Batch</th>
                      <th className="w-1/4">Email</th>
                      <th className="w-1/5">Password</th>
                      <th className="w-1/6 px-3">No. HP</th>
                      <th className="w-1/6">Laboratorium</th>
                      <th className="w-1/12 text-center">No. Lab</th>
                      <th className="w-1/6 text-center">Action</th>
                    </tr>
                  </thead>
                  {search(student).map((dat, index) => {
                    return (
                      <tbody key={index}>
                        <tr className="py-8 border-b-2 border-gray-300 text-xs">
                        <td className="px-2 text-left">
                            {index+1}
                          </td>
                          <td className="px-2 text-left break-words">
                            {dat.name}
                          </td>
                          <td className="text-left break-words">
                            {dat.studentId}
                          </td>
                          <td className="px-2 text-left">
                            {dat.batch}
                          </td>
                          <td className=" text-left break-words">
                            {dat.email}
                          </td>
                          <td className="text-left break-words">
                            {dat.password}
                          </td>
                          <td className="px-3 text-left">
                            {dat.phone}
                          </td>
                          <td className="text-left break-words">
                            {dat.lab}
                          </td>
                          <td className="px-1 text-center">
                            {dat.labNum}
                          </td>
                          <td className="text-center">
                            {" "}
                            <Link
                              to={`editprofile/${dat._id}`}
                              onClick={()=> setUpdate(dat)}
                              className="font-bold text-slate-50 mr-2 bg-sky-600 py-1.5 px-3 decoration-transparent hover:bg-sky-800 hover:text-yellow-400"
                            >
                              Edit
                            </Link>
                            <Link
                              onClick={()=>{handleDelete(dat._id, dat.name)}}
                              className="font-bold text-slate-50 bg-red-600 py-1.5 px-2 decoration-transparent hover:bg-red-800 hover:text-yellow-400"
                            >
                              Delete
                            </Link>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </table>
                {showModal.isLoading && <Modal onDialog={confirmDelete} message={showModal.message} nameModuleOrStudent={showModal.nameModuleOrStudent}/>}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                  />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Student;