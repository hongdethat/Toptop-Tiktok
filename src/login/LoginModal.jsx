import React from "react";
import { MdClose } from 'react-icons/md';
import Login from './Login'
import "./css/Login.css";

function LoginModal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="Modal__close" onClick={() => {setOpenModal(false);}}><MdClose className="Modal__close__icon"/></button>
        <div className="Login__flex">
            <iframe src="http://localhost:3000/login" className="Modal__iframe"/>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;