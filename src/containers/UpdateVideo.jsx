import HeaderAuth from './header/HeaderAuth';
import { AiOutlineCheck } from 'react-icons/ai';
import { Outlet } from 'react-router-dom';

function UpdateVideo(){
	return(
		<div className="UpdateVideo__Desktop">
			<div className="UpdateVideo__layout">
			    <HeaderAuth/>
			    <Outlet/>
			</div>
	    </div>
	)
}
export default UpdateVideo;