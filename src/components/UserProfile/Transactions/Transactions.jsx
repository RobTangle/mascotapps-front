import React from "react";
import { MdOutlineEdit } from "react-icons/md";
import { GrView } from "react-icons/gr";
import { RiDeleteBinLine } from "react-icons/ri";

const Transactions = ({ myProfileData }) => {
  console.log(myProfileData);
  return (
    <div className=" rounded-md w-full">
      <div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Nombre
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Registro
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ciudad
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Estado
                  </th>
                  <th className=" py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Acciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <>
                  <tr key={myProfileData.name}>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <img
                          className="w-12 h-12 rounded-full"
                          src={myProfileData.image}
                          alt="user-img"
                        />

                        <div className="ml-3 grid">
                          <p className="text-gray-900 whitespace-no-wrap capitalize">
                            {myProfileData.name}
                          </p>
                          <p className="text-gray-400 whitespace-no-wrap">
                            {myProfileData.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    {/* <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {u.createdAt.slice(0, 10)}
                          </p>
                        </td> */}
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {myProfileData.city}
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">43</p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span className="relative">Activo</span>
                      </span>
                    </td>
                    <td className=" py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex gap-3">
                        <GrView size={22} />
                        <MdOutlineEdit size={22} />
                        <RiDeleteBinLine size={22} />
                      </div>
                    </td>
                  </tr>
                </>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
