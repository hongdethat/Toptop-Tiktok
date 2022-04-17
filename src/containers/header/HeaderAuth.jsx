import Logo from '../../logo/Logo';
import { User } from '../../asset/images';
import { FiSearch, FiSend } from 'react-icons/fi';
import { BsFillCloudUploadFill } from 'react-icons/bs';
import { BiMessageAltDetail } from 'react-icons/bi';

function HeaderAuth(){
	return(
		<header className="HeaderAuth__Color">
		    <div className="HeaderAuth__Content">
		        <Logo/>
				<div className="Header__search">
				    <input type="text" placeholder="Tìm kiếm tài khoản và video" />
				    <span className="Header__left__input"></span>
				    <button>
				        <FiSearch className="Header__fisearch"/>
				    </button>
				</div>
				<div className="HeaderAuth__menu__right">
			        <BsFillCloudUploadFill className="HeaderAuth__icon"/>
			        <FiSend className="HeaderAuth__icon"/>
			        <BiMessageAltDetail className="HeaderAuth__icon"/>
			        <div className="HeaderAuth__Avatar">
			            <span className="HeaderAuth__1">
			            	<span className="HeaderAuth__2">
			            		<img src={User} alt="User"/>
			            	</span>
			            </span>
			        </div>
				</div>
		    </div>
		</header>
	)
}
export default HeaderAuth;