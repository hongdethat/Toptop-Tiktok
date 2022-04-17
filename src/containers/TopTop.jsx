import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import { Main } from './components';
import Body from './components/Body';
import './css/TopTop.css';

function TopTop(){
	return(
		<div className="TopTop__flex__all">
		    <span className="TopTop__flex">
			    <Header/>
		    </span>
		    <span className="TopTop__flex__body">
		        <div>
		            <Main/>
		        </div>
		        <div>
		            <Outlet/>
		        </div>
		    </span>
		</div>
	);
}
export default TopTop;