import { Link } from 'react-router-dom';
import { AiOutlineCopyright } from 'react-icons/ai';
import './Footer.css';

function Footer(){
	return(
		<div className="Footer">
		    <footer>
		        <div className="Footer__logo">
			        <div className="Footer__content">
			            <img src="https://lf16-tiktok-web.ttwstatic.com/obj/tiktok-web/tiktok/web/node/_next/static/images/logo-7328701c910ebbccb5670085d243fc12.svg" alt="logo"  className="Footer__img1"/>
			            <div>TópTóp</div>
			        </div>
		        </div>
		        <div className="Footer__column">
		            <h4>Công ty</h4>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Giới thiệu</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Bảng tin</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Liên hệ</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Sự nghiệp</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>ByteDance</h5>
			            </Link>
			        </span>
		        </div>
		        <div className="Footer__column">
		            <h4>Chuơng trình</h4>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>TópTóp for Good</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Quảng cáo</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Developer</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>TópTóp Rewards</h5>
			            </Link>
			        </span>
		        </div>
		        <div className="Footer__column">
		            <h4>Hỗ trợ</h4>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Trung tâm Trợ giúp</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Trung tâm An toàn</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Creator Portal</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Hướng dẫn Cộng đồng</h5>
			            </Link>
			        </span>
			        <span className="Footer__span">
			            <Link to="#/">
			                <h5>Minh bạch</h5>
			            </Link>
			        </span>
			        <span className="Footer__span">
			            <Link to="#/">
			                <h5>Accessibility</h5>
			            </Link>
			        </span>
		        </div>
		        <div className="Footer__column">
		            <h4>Pháp lý</h4>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Terms of Use</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>Privacy Policy</h5>
			            </Link>
			        </span>
		            <span className="Footer__span">
			            <Link to="#/">
			                <h5>NGUYÊN TẮC THỰC THI PHÁP LUẬT CỦA TÓPTÓP</h5>
			            </Link>
			        </span>
		        </div>
		    </footer>
		    <div className="Footer__margin">
		    	<select>
		    	    <option>Tiếng việt</option>
		    	    <option>Tiếng anh</option>
		    	    <option>China</option>
		    	    <option>Japan</option>
		    	</select>
		    	<span><AiOutlineCopyright/>2022 TópTóp</span>
		    </div>
		</div>
	);
}
export default Footer;