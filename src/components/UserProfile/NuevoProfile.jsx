import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import BadgesPets from "../BadgesPets/BadgesPets";
import ModalProfile from "./ModalEdit/ModalEdit";
import Transactions from "./Transactions/Transactions";
import Footer from "../Footer/Footer";
import { Logout } from "../Logout/Logout";
import { BiDonateHeart } from "react-icons/bi";

import { useDispatch, useSelector } from "react-redux";
import {
  getMyPets,
  myProfile,
  resetMyProfile,
  resetDetail,
} from "../../store/actions";
import { useAuth0 } from "@auth0/auth0-react";
import Swal from "sweetalert2";
import { FaUser } from "react-icons/fa";
import ModalEditDog from "./ModalEditDog/ModalEditDog";

const NuevoProfile = () => {
  const [order, setOrder] = useState("");
  const [hidden, setHidden] = useState(true);
  const [activeModalEditDog, setActiveModalEditDog] = useState(false);
  const [dataEditDog, setDataEditDog] = useState({});

  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const myPets = useSelector((state) => state.userPets);
  const myProfileData = useSelector((state) => state.myProfile);
  const transactions = myProfileData?.transactions;

  const belloPerfil = {
    id: `${user?.sub}`,
    email: `${user?.email}`,
    name: myProfileData["userProps"]?.name,
    city: myProfileData["userProps"]?.city,
    contact: myProfileData["userProps"]?.contact,
    image: myProfileData["userProps"]?.image,
  };

  console.log(myProfileData);

  const handleSubmit = () => {
    if (isAuthenticated) {
      dispatch(getMyPets(user));
    }
  };
  //eslint-disable-next-line
  const handleClick = () => {
    setHidden(hidden === true ? false : true);
  };

  const handleActiveEditDog = (data) => {
    setActiveModalEditDog(!activeModalEditDog);
    data && setDataEditDog(data);
    setOrder(order === "now" ? "nowpAPASITO" : "now");
  };

  useEffect(() => {
    dispatch(myProfile({ id: user?.sub }));
    handleSubmit();
    return () => {
      dispatch(resetMyProfile());
      dispatch(resetDetail());
    };
  }, [order, dispatch, user]);
  if (!isAuthenticated) {
    Swal.fire({
      title: "No estás logueado",
      text: "Debes iniciar sesión para ver tu perfil.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#28B0A2",
      cancelButtonColor: "#B0B0B0",
      cancelButtonText: "Ir a inicio",
      confirmButtonText: "Iniciar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "/";
      } else {
        window.location.href = "/home";
      }
    });
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className=" my-5 mx-5 p-3">
        <div className="md:flex no-wrap relative">
          {myProfileData["userProps"]?.isDonator === "true" && (
            <div className="absolute transition-all ease-in-out  duration-250	 cursor-pointer text-teal-500 hover:text-amber-400 top-5 right-0 text-4xl">
              <BiDonateHeart />
            </div>
          )}
          {/* <!-- Left Side --> */}
          <div className="w-full md:w-1/2 md:mx-6 lg:w-3/12 lg:mx-8">
            {/* <!-- Profile Card --> */}
            <div className="bg-white p-3 border-t-4 border-[#FFC700]">
              <div className="image overflow-hidden w-[280px] h-[280px] mx-auto md:h-[200px] md:w-[200px]">
                <img
                  className="h-full w-full  mx-auto rounded-full object-cover"
                  src={myProfileData["userProps"]?.image}
                  alt=""
                />
              </div>
              <h1 className="text-gray-600 font-bold text-xl leading-8 my-1 text-center">
                {myProfileData["userProps"]?.name}
              </h1>

              <ul className=" mt-3 divide-y ">
                <li className="grid items-center text-center py-3 gap-1">
                  <Link
                    to="/postpets"
                    className="px-6 py-3  bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                  >
                    Postear un aviso!
                  </Link>

                  <button
                    className="px-6 py-3 bg-[#FFC700] rounded-md font-bold hover:bg-[#ffd803]/80 transition-all duration-300"
                    onClick={handleClick}
                  >
                    {" "}
                    Ver mis mascotas!
                  </button>
                  <div className="w-full">
                    <Logout />
                  </div>
                </li>
              </ul>
            </div>
            {/* <!-- End of profile card --> */}
          </div>
          {/* <!-- Right Side --> */}
          <div className="w-full lg:w-9/12 lg:mx-8 mx-2 ">
            {/* <!-- Profile tab -->
                <!-- About Section --> */}
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-700 leading-8">
                <FaUser />
                <span className="tracking-wide">Información de perfil</span>
                <div>
                  <ModalProfile belloPerfil={belloPerfil} />
                </div>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-1 text-sm lg:grid-cols-2">
                  <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Nombre
                    </div>
                    <div className=" py-2 text-gray-400 col-span-2">
                      {myProfileData["userProps"]?.name}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Contacto
                    </div>
                    <div className=" py-2 text-gray-400 col-span-2">
                      {myProfileData["userProps"]?.contact}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Email
                    </div>
                    <div className=" py-2 text-gray-400 col-span-2">
                      {belloPerfil?.email}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
                    <div className=" py-2 font-semibold text-[#28B0A2]">
                      Ciudad
                    </div>
                    <div className=" py-2 text-gray-400 col-span-2">
                      {myProfileData["userProps"]?.city}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div hidden={hidden} className="w-full">
              {myPets?.length > 0 ? (
                <BadgesPets
                  user={user}
                  hidden={hidden}
                  setHidden={setHidden}
                  handleActiveEditDog={handleActiveEditDog}
                  setOrder={setOrder}
                  setActiveModalEditDog={setActiveModalEditDog}
                />
              ) : null}
            </div>
            <div>
              <Transactions transactions={transactions} setOrder={setOrder} />
            </div>
          </div>
        </div>
      </div>
      {activeModalEditDog && (
        <ModalEditDog
          dataEditDog={dataEditDog}
          handleActiveEditDog={handleActiveEditDog}
        />
      )}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default NuevoProfile;
