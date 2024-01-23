import React from "react";
import "./Contactus.css";
import Wrapper from "../wrapper/Wrapper";

const Contactus = () => {
  return (
    <Wrapper>
      <div className="container1">
        <h2>Contact Us</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Your Query" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </Wrapper>
  );
};

export default Contactus;
