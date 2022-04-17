import React, { useState } from "react";
import Logo from '../../logo/Logo';
import { FiSearch } from 'react-icons/fi';
import { RiMore2Fill } from 'react-icons/ri';
import LoginModal from '../../login/LoginModal';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { RiKeyboardFill } from 'react-icons/ri';
import { MdLanguage } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './css/Header.css';

function Header(){
	const [modalOpen, setModalOpen] = useState(false);
	return(
		<div>
			<div className="Header__search__TopTop">
			    <div className="Flex__H">
				    <Logo/>
				    <div className="Header__search">
				        <input type="text" placeholder="Tìm kiếm tài khoản và video" />
				        <span className="Header__left__input"></span>
				        <button>
				            <FiSearch className="Header__fisearch"/>
				        </button>
				    </div>
				    <div className="Header__flex__all">
				        <Link to="upload" className="Header__search_upload">Tải lên</Link>
				        <button className="Header__btn" onClick={() => {setModalOpen(true);}}>Đăng nhập</button>
				        <div className="icon__header">
				            <RiMore2Fill className="Header__More"/>
				            <ul className="dropdown-menu">
								<li><Link to="#/"><MdLanguage className="Header__More__icon"/>Tiếng Việt</Link></li>
								<li><Link to="#/"><AiOutlineQuestionCircle className="Header__More__icon"/>Phản hồi và trợ giúp</Link></li>
								<li><Link to="#/"><RiKeyboardFill className="Header__More__icon"/>Phím tắt trên bàn phím</Link></li>
							</ul>
				        </div>
				    </div>
			    </div>
			</div>
			{modalOpen && <LoginModal setOpenModal={setModalOpen} />}
		</div>
	);
}
export default Header;
