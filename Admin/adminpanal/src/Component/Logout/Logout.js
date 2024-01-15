import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("Removing access token and navigating to /");
    window.localStorage.removeItem("access-token");
    window.location.reload(true);

    navigate("/");
  }, [navigate]);

  return (
    <>
      <p>Logging out...</p>
    </>
  );
};

export default Logout;
