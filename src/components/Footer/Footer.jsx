import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" p-6 bg-green-900 text-white grid grid-cols-4 gap-4">
      {/* Left Column - Spans 2 Rows */}
      <div className="col-span-2 flex flex-col">
        <div className="mb-4">
          <h3>Contact Us</h3>
          <p>Email: smitb@travlorg.com</p>
          <p>1880-128-6601</p>
        </div>
        <div className=" p-2 flex gap-2">
          {/* Add your social icons or links here */}
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
           <FaFacebookF size={20}/>
          </a>
          <a href="https://twitter.com/login" target="_blank" rel="noopener noreferrer">
           <FaTwitter size={20} />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
           <FaInstagram size={20} />
          </a>
          {/* Add more social links as needed */}
        </div>
      </div>

      {/* Right Columns - 4 Items */}
      <div className="col-span-1">Serivces</div>
      <div className="col-span-1">Careers</div>
      <div className="col-span-1">© 2024 All Rights Reserved</div>
      <div className="col-span-1">
        <div className="flex flex-auto">
        16657 Orange Way
        Fontana     <br />
        California 
        92335 <br />
        United States
        </div>
      </div>
    </footer>
  );
}

export default Footer;

{/* <div className="grid grid-col-2 gap-18">
        <div className="grid grid-cols-2 grid-rows-2">
          <div className="flex flex-auto">
            <h3 className="font-bold">TRAVL</h3>{" "}
            <h5 className="text-sm  ml-1">INDIA</h5>
          </div>
          <h3>Opportuinities</h3>
          <h3>Services</h3>
          <h3>careers</h3>
        </div>
        <div className="">
          <h2>Contact Us</h2>
        </div>
      </div>

<div ><h1>3</h1></div>
<div ><h1>4</h1></div> */}