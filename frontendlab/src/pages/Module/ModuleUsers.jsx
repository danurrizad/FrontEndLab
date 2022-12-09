import {React, useState, useEffect, useRef} from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast} from "react-toastify";

import Modal from "../../components/Modal";
import axios from "axios";

import SidenavUsers from "../../components/SidenavUsers";

const Module = () => {
      const [module, setModule] = useState([]); 

      //START OF MODAL
      const idModulRef = useRef();
      const [showModal, setShowModal] = useState({
        message:"",
        nameModuleOrStudent:"",
        isLoading:false
      });

      const handleModal = (message, nameModuleOrStudent, isLoading) => {
        setShowModal({
          message,
          nameModuleOrStudent,
          isLoading,
        })
      }

      const handleDelete = (_id, title) => {
        handleModal("Are you sure want to delete this?", title, true);
        idModulRef.current = _id;
      };

      const confirmDelete = (yes) =>{
        if(yes){
          try{
            console.log(idModulRef.current);
            deleteModule(idModulRef.current);
            handleModal("", false);
            toast.success('Modul berhasil dihapus!', {
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
           toast.error('Modul tidak berhasil dihapus!', {
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

      useEffect(() => {
        getModule();
        deleteModule();
      }, []); 

    
      const getModule = async () => {
        const response = await axios.get(`https://api-paw.bekisar.net/api/v1/modules`);
        setModule(response.data.data);
      }; 

      const setUpdate = async(dat) => {
        let { title,
          batch,
          day,
          lab,
          semester,
          dateStart,
          quota} = dat ;
        localStorage.setItem('Title', title);
        localStorage.setItem('Batch', batch);
        localStorage.setItem('Day', day);
        localStorage.setItem('Lab', lab);
        localStorage.setItem('Semester', semester);
        localStorage.setItem('Date Start', dateStart);
        localStorage.setItem('Quota', quota);
      };

      const deleteModule = async (_id) => {
        try {
          await axios.delete(`https://api-paw.bekisar.net/api/v1/modules/${_id}`);
          getModule();
        } catch (error) {
          console.log(error);
        }
      };
      
      


    //---------------------------------------------------------------------HTML-------------------------------------------------------------------------------------
    return(
        <>
        <div className="absolute">
          <SidenavUsers />
        </div>
        <div className="module p-4 h-screen bg-[#f6f6f2]">
        <div className="px-10">
          <div className="">
            <div className=" bg-[#388087] py-1 px-4 rounded-xl">
              <h1 className="text-center font-serif font-bold text-white">My Module</h1>
            </div>
            <div className="flex justify-between gap-6">
              
            </div>
            <div className="flex mt-4 justify-between gap-4">
              <div className="bg-white rounded-xl shadow-sm w-full h-full p-4">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold flex items-center">
                    <Link className="" to="/module/ambilmodule">
                      <button class="bg-[#6fb3b8] rounded-xl py-1 px-4 text-white hover:bg-[#4e7d81] hover:text-gray-400">
                        + Ambil modul disini
                      </button>
                    </Link>
                  </div>
                  <div className="flex px-4 py-8">
                    <div className="flex items-center">
                    </div>
                  </div>
                </div>

                <div className="pb-10">
                  <table className="w-full table-fixed text-left overflow-y-auto">
                    <thead className="bg-[#ecfcff] border-b-2 border-gray-300">
                      <tr className="border-b-2 border-gray-300 font-bold">
                        <th className="w-1/3 py-3 px-2">Nama Modul</th>
                        <th className="w-1/6 text-center">Batch</th>
                        <th className="w-1/6 text-center">Hari</th>
                        <th className="w-1/3">Lab</th>
                        <th className="w-1/6 text-center">Semester</th>
                        <th className="w-1/3">Tanggal</th>
                        <th className="w-1/4 ">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                        <tr className="border-b-2 border-gray-300">
                            <td className="py-2 px-2 text-left">
                                TITLE MODUL USER
                            </td>
                            <td className="text-center">
                                BATCH MODUL USER
                            </td>
                            <td className="text-center">
                                DAY MODUL USER
                            </td>
                            <td className="text-left">
                                LAB MODUL USER
                            </td>
                            <td className="text-center">
                                SEMESTER MODUL USER
                            </td>
                            <td className="text-left">
                                TANGGAL MODUL USER
                            </td>
                            <td className=" text-left">
                            {" "}
                            <Link
                                className="font-bold text-slate-50 bg-red-600 py-1 px-2 decoration-transparent hover:bg-red-800 hover:text-yellow-400"
                            >
                                Delete
                                
                            </Link>
                            </td>
                        </tr>
                    </tbody>
                  </table>
                  

                  {showModal.isLoading && <Modal onDialog={confirmDelete} message={showModal.message} nameModule={showModal.nameModule}/>}

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
      </div>
        </>
    )
}

export default Module;