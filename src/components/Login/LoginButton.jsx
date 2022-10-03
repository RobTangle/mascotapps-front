import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_EXIST } from "../../constants/url";

export const LoginButton = ({ className, text, children }) => {
  const { loginWithRedirect , user,
    isAuthenticated,
    getAccessTokenSilently,
    isLoading, } = useAuth0();
const navigate = useNavigate();

const handleValidation = async (user, isAuthenticated) => {
  try {
    const claims = await getAccessTokenSilently();
    localStorage.setItem("token", claims);

    if (isAuthenticated && user) {
      let existe = await axios.get(URL_EXIST, {
        headers: {
          Authorization: `Bearer ${claims}`,
        },
      });

      if (existe.data.msg) {
        navigate("/home");
      } else {
        navigate("/register");
      }
    }
  } catch (error) {
    console.log(error);
  }
};

if (!isLoading && isAuthenticated) {
  handleValidation(user, isAuthenticated);
}
  return (
    <button onClick={() => loginWithRedirect()} className={className}>
      {children}
      {text}
    </button>
  );
};
