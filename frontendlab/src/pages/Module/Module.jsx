import {React, useState, useEffect, useRef} from "react";
import './Module.css';
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import Modal from "../../components/Modal";
import { ToastContainer, toast} from "react-toastify";
import { dialog } from "@material-tailwind/react";
//() => deleteModule(dat._id)

const Module = () => {
      const [module, setModule] = useState([]); 

      //START OF MODAL
      const idModulRef = useRef();
      const [showModal, setShowModal] = useState({
        message:"",
        nameModule:"",
        isLoading:false
      });

      const handleModal = (message, nameModule, isLoading) => {
        setShowModal({
          message,
          nameModule,
          isLoading,
        })
      }

      const handleDelete = (id, title) => {
        handleModal("Are you sure want to delete this?", title, true);
        idModulRef.current = id;
      };

      const confirmDelete = (yes) =>{
        if(yes){
          try{
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
        const response = await axios.get("http://api-paw.bekisar.net/api/v1/modules");
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
        console.log(_id);
        try {
          await axios.delete("http://api-paw.bekisar.net/api/v1/modules/${_id}");
          getModule();
        } catch (error) {
          console.log(error);
        }
      };
      
      //SEARCH FUNCTION
      const [query, setQuery] = useState("");
      const [searchParam] = useState(["title", "lab"]);
      const search = (data) => {
        return data.filter((item) => 
            searchParam.some((key) => item[key].toLowerCase().includes(query))
        );
      }

    return(
        <>
        <div className="module p-2">
        <div className="">
          <div className="">
            <div className=" bg-[#388087] py-1 px-4 rounded-xl">
              <h1 className=" font-serif">Module</h1>
            </div>
            <div className="flex justify-between gap-6">
              
            </div>
            <div className="flex mt-4 justify-between gap-4">
              <div className="bg-white rounded-xl shadow-sm w-full h-full p-4">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold flex items-center">
                    <Link className="" to="/module/tambahmodul">
                      <button class="bg-[#6fb3b8] rounded-xl py-1 px-4 text-white hover:bg-[#4e7d81] hover:text-gray-400">
                        + Tambahkan Modul Baru disini
                      </button>
                    </Link>
                  </div>
                  <div className="flex px-4">
                    <div className="flex items-center">
                      <form action="">
                        <div className="relative flex items-center">
                          <input
                            type="text"
                            placeholder="Cari Modul"
                            className=" text-sm font-normal rounded-md border-2 border-gray-300 pr-3 pl-6 py-1 m-4"
                            onChange={(e) => setQuery(e.target.value)}
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="pb-10">
                  <table className="w-full table-fixed text-left overflow-y-auto">
                    <thead className="bg-[#ecfcff] border-b-2 border-gray-300">
                      <tr className="border-b-2 border-gray-300">
                        <th className="w-1/3 py-3 px-2">NAMA MODUL</th>
                        <th className="w-1/6">BATCH</th>
                        <th className="w-1/6">HARI</th>
                        <th className="w-1/3">LAB</th>
                        <th className="w-1/6">SEMESTER</th>
                        <th className="w-1/3">TANGGAL</th>
                        <th className="w-1/6">KUOTA</th>
                        <th className="w-1/4 ">ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                        {search(module).map((dat) => {
                          const tanggal = new Date(dat.dateStart).toDateString()
                          const batch_string = new String(dat.batch).toString()
                            return (
                              <tr className="py-4 border-b-2 border-gray-300">
                                  <td className="px-2 text-left">
                                      {dat.title}
                                  </td>
                                  <td className="px-3 text-left">
                                      {batch_string}
                                  </td>
                                  <td className="px-3 text-left">
                                      {dat.day}
                                  </td>
                                  <td className="text-left">
                                      {dat.lab}
                                  </td>
                                  <td className="px-4 text-left">
                                      {dat.semester}
                                  </td>
                                  <td className="w-1/5 text-left">
                                      {tanggal}
                                  </td>
                                  <td className="w-1/5 text-left">
                                      {dat.quota}
                                  </td>
                                  <td className=" text-left">
                                  {" "}
                                  <Link
                                    to={`editmodul/${dat._id}`}
                                    className="font-bold text-slate-50 mr-2 bg-sky-600 py-1.5 px-3 decoration-transparent hover:bg-sky-800 hover:text-yellow-400"
                                    onClick={() => setUpdate(dat)}
                                  >
                                    Edit
                                  </Link>
                                  <button
                                    onClick={()=>{handleDelete(dat._id, dat.title)}}
                                    className="font-bold text-slate-50 bg-red-600 py-1 px-2 hover:bg-red-800 hover:text-yellow-400"
                                  >
                                    Delete
                                    
                                  </button>
                                  </td>
                              </tr>
                              );
                        })}
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