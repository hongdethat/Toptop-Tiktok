import '../css/Details.css';
import { Link, useNavigate } from 'react-router-dom';
import { AvatarUser } from '../../../asset/images';
import { AiFillHeart, AiOutlineTwitter, AiOutlineHeart } from 'react-icons/ai';
import { BsMusicNoteBeamed, BsChatDotsFill, BsCodeSlash, BsEmojiLaughing, BsFlag, BsFillPlayFill } from 'react-icons/bs';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';
import { IoIosShareAlt, IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
import { BiChevronDown } from 'react-icons/bi';
import { GiSpeaker } from 'react-icons/gi';
import { RiSendPlaneFill } from 'react-icons/ri';

const Data = [{
	id:1,
},
{
	id:2,
},
{
	id:3,
},
{
	id:4,
},
{
	id:5,
},
{
	id:6,
},
{
	id:7,
},
{
	id:8,
},
{
	id:9,
},
{
	id:10,
}]
function Details(){
	const history = useNavigate();
	return(
		<div className="Details__flex__column">
		    <title>Tiêu đề của Clips | TópTóp</title>
		    <div className="Details__container">
		        <div className="Details__background"></div>
		    	<div className="Details__wrapper">
		    	    <div className="Details__wrapper__container">
		    	        <img src="https://p16-sign-sg.tiktokcdn.com/obj/tos-alisg-p-0037/578c66927ddd4bb98f8dbc0b1f0cfd41?x-expires=1650204000&x-signature=PpHTDi7eb6EQkRxPI%2F9iJlCu%2Fac%3D" alt="Tên video" />
		    	        <div className="Details__browser">
		    	        	<video src="https://v16-webapp.tiktok.com/8a74735a9487cb8f1275c6cefeab4f97/625c294d/video/tos/alisg/tos-alisg-pve-0037c001/db4525c88eb94f799464166fdf752ad3/?a=1988&amp;br=2260&amp;bt=1130&amp;cd=0%7C0%7C1%7C0&amp;ch=0&amp;cr=0&amp;cs=0&amp;cv=1&amp;dr=0&amp;ds=3&amp;er=&amp;ft=eXd.6H-qMyq8Z6XWLwe2NPchml7Gb&amp;l=2022041708502501018600418309E1AB35&amp;lr=tiktok_m&amp;mime_type=video_mp4&amp;net=0&amp;pl=0&amp;qs=0&amp;rc=anM6Zjs6Zjg8OzMzODczNEApO2g7Njw3Mzw6N2Q4NDc1NWcvLXE1cjQwXnBgLS1kMS1zcy8vNDMvM2EzMmNeYzYuLTA6Yw%3D%3D&amp;vl=&amp;vr=" autobuffer loop autoPlay></video>
		    	        </div>
		    	    </div>
		    	</div>
		    	<button className="Details__Close" onClick={()=> history("/")}>
		    		<MdClose className="Details__Close__icon"/>
		    	</button>
		    	<img src={AvatarUser} alt="User" className="Logo__Details"/>
		    	<div className="Details__Music">
		    	    <button className="Details__icon__music"><GiSpeaker className="Details__Speak"/></button>
		    	</div>
		    	<button className="Arrow__left__details"><IoIosArrowUp className="Details__Speak"/></button>
		    	<button className="Arrow__right__details"><IoIosArrowDown className="Details__Speak"/></button>
		    	<div className="Details__Repost"><BsFlag/>Báo cáo</div>
		    	<div className="Details__Controls">play</div>
		    	<div className="Details__Player"><BsFillPlayFill className="icon__BsFillPlayFill__details"/></div>
		    </div>

		    <div className="Details__content">
		    	<div className="Details__user">
		    		<Link to="#/" className="Details__user_a">
		    			<span className="Details__user__span">
		    				<img src={AvatarUser} alt="User"/>
		    			</span>
		    		</Link>
		    		<span className="Details__user__span__flex">
		    			<span className="Details__user__bold">top.top</span>
		    			<span className="Details__user__nomal">
			    			<span>Trần Thị Tóp Tóp</span>
			    			<span style={{margin: '0px 4px'}}> · </span>
			    			<span>2-22</span>
		    			</span>
		    		</span>
		    		<button>Follow</button>
		    	</div>
		    	<div className="Details__text">
		    	    <div className="Details__text1">
		    	    	<span className="Details__text2">Follow cùng tóp tóp nha mọi người...</span>
		    	    	<Link to="#/" className="VideoTopTop__a">
			   	            <strong className="VideoTopTop__strong">#truyencamhung </strong>
			   	        </Link>
			   	        <Link to="#/" className="VideoTopTop__a">
			   	            <strong className="VideoTopTop__strong">#truyencamhung </strong>
			   	        </Link>
			   	        <Link to="#/" className="VideoTopTop__a">
			   	            <strong className="VideoTopTop__strong">#truyencamhung </strong>
			   	        </Link>
		    	    </div>
					<h4 className="VideoTopTop__h4">
					    <Link to="#/">
					       <BsMusicNoteBeamed className="VideoTopTop__icon__music"/>
					       Đoạn tuyệt nàng đi - Folotilo
					    </Link>
					</h4>
					<div className="Details__Link">
					    <div className="Details__flex__link">
					    	<div className="Details__Link__btn">
								<button>
									<span className="Details__Link__icon_Bg"><AiFillHeart className="Video__btn__icon"/></span>
									<strong className="Details__Link__strong">99.9k</strong>
								</button>
							    <button className="btn__link_add">
					    		 	<span className="Details__Link__icon_Bg"><BsChatDotsFill className="Video__btn__icon2"/></span>
					    		 	<strong className="Details__Link__strong">9999</strong>
					    		</button>
					    	</div>
					    	<div className="Details__share">
					    	    <Link to="#/"><BsCodeSlash className="icon__BsCodeSlash"/></Link>
					    	    <Link to="#/"><RiSendPlaneFill className="icon__FiSend"/></Link>
					    	    <Link to="#/"><FaFacebookF className="icon__FaFacebookF"/></Link>
					    	    <Link to="#/"><FaWhatsapp className="icon__FaWhatsapp"/></Link>
					    	    <Link to="#/"><AiOutlineTwitter className="icon__AiOutlineTwitter"/></Link>
                                <Link to="#/"><IoIosShareAlt className="icon__detail__FaShare"/></Link>
					    	</div>
					    </div>
					    <div className="Details__Link__copy">
					    	<p>http://localhost:3000/@top.top/123456789</p>
					    	<button>Sao chép liên kết</button>
					    </div>
					</div>
		    	</div>
		    	<div className="Details__comments">
                    {Data.map((VideoTopTopUser) => (
		    	    <div className="Details__comments__margin">
		    	  	    <div className="Details__comments__flex">
		    	  	   	    <Link to="#/" className="Details__user_a">
				    			<span className="Details__user__span">
				    				<img src={AvatarUser} alt="User"/>
				    			</span>
				    		</Link>
				    		<div className="comment__flex__1__1">
				    		    <span className="Details__user__bold">top.top</span>
				    		    <p>Hay quá đi...</p>
				    		    <p className="Details__comment__color">
				    		    	<span className="comment__flex__time">2-22</span>
				    		    	<span className="comment__flex__reply">Trả lời</span>
				    		    </p>
				    		</div>
				    		<div className="Details__Like">
				    		    <div></div>
				    		    <div className="Details__Like__flex">
				    		        <AiOutlineHeart className="Details__icon__heart"/>
				    		    	<span>9999</span>
				    		    </div>
				    		</div>
		    	  	</div>
	    	  	    <div className="More__details__padding">
	    	  	        <div className="More__details__flex">
	    	  	            <p>Xem thêm câu trả lời khác (99)<BiChevronDown className="Details__icon__BiChevronDown"/></p>
	    	  	        </div>
	    	  	    </div>
		    	</div>
		    	  ))}
		    	</div>
		    	<div className="Details__Link__from">
		    	    <div className="Details__Link__input">
		    	        <div className="Details__Link__input1">
		    	            <div className="Details__Link__input2">
		    	                <div className="Details__Link__input3">
		    	                	<input type="text"/>
		    	                </div>
		    	                <div className="Details__input__icon">@</div>
		    	                <div className="Details__input__icon"><BsEmojiLaughing/></div>
		    	            </div>
		    	        </div>
		    	        <div className="Details__text__post">Đăng</div>
		    	    </div>
		    	</div>
		    </div>
		</div>
	)
}
export default Details;