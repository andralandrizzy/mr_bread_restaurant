import React from "react";
import Contact from "../components/Contact";
import HeaderContent from "../components/HeaderContent";

const contact = () => {
  return (
    <>
      <div className="show_content contact">
        <HeaderContent title = "Contact" prevpage = "Home" activepage = "Contact"/>
      </div>
      <Contact />
    </>
  );
};

export default contact;
