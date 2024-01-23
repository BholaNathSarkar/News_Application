import React from "react";
import Naveba from "../Navebar/Naveba";
import Footer from "../Footer/Footer";

const Wrapper = (props) => {
  return (
    <>
      <Naveba />
      {props.children}
      <Footer />
    </>
  );
};

export default Wrapper;
