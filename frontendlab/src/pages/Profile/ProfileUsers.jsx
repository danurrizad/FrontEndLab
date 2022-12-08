import React from "react";
import './Profil.css';
import SidenavUsers from '../../components/SidenavUsers'

export default function Profile(){
    return(
        <div>
            <div className="absolute">
              <SidenavUsers />
            </div>
            <div className="student p-4">
                <div className="px-10">
                <div className="bg-[#388087] py-1 px-4 rounded-xl">
                    <h1 className=" text-center font-serif font-bold text-white">My Profile</h1>
                </div>
                <div className="flex mt-4 justify-between gap-4">
                    <div className="bg-white rounded-xl shadow-sm w-full h-full p-4">
                    <div className="flex justify-between">
                        <div className="flex relative p-4">
                        <div className="flex items-center place-items-end searchs">
                           
                        </div>
                        </div> 
                    </div>

                    <div className="pb-10 cont-table">
                        <table className="w-full table-fixed text-left overflow-y-auto">
                        <thead className="bg-[#ecfcff] border-b-2 border-gray-300">
                            <tr className="border-b-2 border-gray-300 text-sm font-bold">
                                <th className="w-1/4 py-3 px-2">Nama</th>
                                <th className="w-1/6">NIM</th>
                                <th className="w-1/12 px-2">Batch</th>
                                <th className="w-1/4">Email</th>
                                <th className="w-1/5">Password</th>
                                <th className="w-1/6 px-3">No. HP</th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr className="py-8 border-b-2 border-gray-300 text-xs">
                                <td className="px-2 text-left break-words">
                                    NAMA USER
                                </td>
                                <td className="text-left break-words">
                                    NIM USER
                                </td>
                                <td className="px-2 text-left">
                                    BATCH USER
                                </td>
                                <td className=" text-left break-words">
                                    EMAIL USER
                                </td>
                                <td className="text-left break-words">
                                    PASSWORD USER
                                </td>
                                <td className="px-3 text-left">
                                    PHONE USER
                                </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}