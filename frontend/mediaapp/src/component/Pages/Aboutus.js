import React from "react";
import Wrapper from "../wrapper/Wrapper";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <Wrapper>
      <div className="locate">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.9830508960717!2d88.43516517483823!3d22.579737232709647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a701908349%3A0x8d6c12852bc079bc!2sTechnopolis%20Building!5e0!3m2!1sen!2sin!4v1699344221727!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div>
        <h1 className="aboutPosition">About Our Company</h1>
      </div>
    </Wrapper>
  );
};

export default Aboutus;
