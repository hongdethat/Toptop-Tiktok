import { AvatarUser } from '../../../asset/images';
import { useState } from 'react';
import { Video } from '../../../asset/clips';
import Database from '../../../asset/database/Database';
import { BsMusicNoteBeamed, BsChatDotsFill, BsCheck2, BsCodeSlash, BsLink45Deg, BsLine } from 'react-icons/bs';
import { RiSendPlaneFill, RiArrowDropDownLine } from 'react-icons/ri';
import { FaFacebookF, FaWhatsapp, FaLinkedinIn, FaRedditAlien, FaTelegramPlane, FaPinterestP } from 'react-icons/fa';
import { AiFillHeart, AiOutlineTwitter } from 'react-icons/ai';
import { IoIosShareAlt } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../css/VideoTopTop.css';

function VideoTopTop(){
	const [visibleBlogs, setVisibleBlogs] = useState(5);
	const [seeMe, setSeeMe] = useState(false);
	const [blogs, setBlog] = useState([
		{
		  name: "Nhúng",
		  icon: <BsCodeSlash className="icon__BsCodeSlash"/>,
		  id: 1
		},
		{
		  name: "Gửi đến bạn bè",
		  icon: <RiSendPlaneFill className="icon__FiSend"/>,
		  id: 2
		},
		{
		  name: "Chia sẻ với Facebook",
		  icon: <FaFacebookF className="icon__FaFacebookF"/>,
		  id: 3
		},
		{
		  name: "Chia sẻ với Whatsapp",
		  icon: <FaWhatsapp className="icon__FaWhatsapp"/>,
		  id: 4
		},
		{
		  name: "Sao chép liên kết",
		  icon: <BsLink45Deg className="icon__FiSend"/>,
		  id: 5
		},
		{
		  name: "Chia sẻ với Twitter",
		  icon: <AiOutlineTwitter className="icon__AiOutlineTwitter"/>,
		  id: 6
		},
		{
		  name: "Chia sẻ với LinkedIn",
		  icon: <FaLinkedinIn className="icon__FaLinkedinIn"/>,
		  id: 7
		},
		{
		  name: "Chia sẻ với Reddit",
		  icon: <FaRedditAlien className="icon__FaRedditAlien"/>,
		  id: 8
		},
		{
		  name: "Chia sẻ với Telegram",
		  icon: <FaTelegramPlane className="icon__FaTelegramPlane"/>,
		  id: 9
		},
		{
		  name: "Chia sẻ với Email",
		  icon: <MdEmail className="icon__MdEmail"/>,
		  id: 10
		},
		{
		  name: "Chia sẻ với Line",
		  icon: <BsLine className="icon__BsLine"/>,
		  id: 11
		},
		{
		  name: "Chia sẻ với Pinterest",
		  icon: <FaPinterestP className="icon__FaPinterestP"/>,
		  id: 12
		}
		]);

	const laodMe = () => {
	setSeeMe(!seeMe);
	};
  const cardComponent = blogs.slice(0, visibleBlogs).map((Share, i) => {
    return (
    	<div key={i}>
    	    <Link to="#/" className="Share__Clips">
		        {Share.icon}
		    	<span className="name__share">{Share.name}</span>
		    </Link>
    	</div>
    );
  });
	return(
		<div className="VideoTopTop__All">
      {Database.Update.map((VideoTopTopUser) => (
			<div className="BodysVideos">
			   <div className="BodysVideo">
				    <div className="Test__hover">
					    <Link to="#/" className="User__avatar">
					   	   <div className="VideoTopTop__Main">
					   	       <span className="img__user">
					   	           <img src={AvatarUser} alt="User Name" />
					   	       </span>
					   	   </div>
					   </Link>
					    <div className="Dropdown__user__content">
						    <div className="VideoTopTop__Form">
						        <span className="Dropdown__flex__Link">
									<a href="#/" className="Dropdown__flex__ab">
										<span className="img__hover__dropdown">
											<img src={AvatarUser} alt="Name" className="img__span__drop"/>
										</span>
									</a>
									<button className="VideoTopTop__Follows">Follow</button>
								</span>
								<a href="#/" className="UserContainers__Follow__me__als">
								    <span>top.top</span>
								    <BsCheck2 className="UserContainers__BsCheck2"/>
								</a>
								<a href="#/" className="UserContainers__Follow__me__als2">
								   Trần Thị Tóp Tóp
								</a>
								<p className="margin__UserContainer">
									<span className="margin__UserContainer__follower">9.99M</span>
									<span className="Margin__span__text">Follower</span>
									<span className="margin__UserContainer__follower">9.99M</span>
									<span className="Margin__span__text">Thích</span>
								</p>
								<p className="title__VideoTopTop__user">Hôm nay Tóp Tóp Thả F/S nha mọi người :v</p>
						    </div>
						</div>
				   </div>
				   <div className="Body__video">
				        <div className="Content__videos">
				       	    <div className="name__user">
				       	    	<div className="VideoTopTop__block">
				       	    	    <h3>top.top</h3>
				       	    	    <h4>Trần Thị Tóp Tóp</h4>
				       	    	</div>
				       	    </div>
				       	    <div className="Content__container">
					   	        <span className="Content__span">Follow cùng tóp tóp nha mọi người... </span>
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
				        </div>
				        <div className="Video">
						    <div className="Video__container">
						        <video width="400" controls autobuffer loop autoPlay muted className="Video__videos">
								    <source src={Video} type="video/mp4"/>
								</video>
						    </div>
						    <div className="Video__icon">
							    <button className="Video__btn">
							    	<span><AiFillHeart className="Video__btn__icon"/></span>
							    	<strong>99.9k</strong>
							    </button>
							    <button className="Video__btn">
							    	<Link to="@top.top/123456789"><span><BsChatDotsFill className="Video__btn__icon"/></span></Link>
							    	<strong>9999</strong>
							    </button>
							    <div className="Hover__share__clips">
							    	<div className="Dropdown__share__link">
							    	    <div className="padding__share">
										    {cardComponent}
											<Link to="#/" className="More__share"
													disabled={blogs.length === cardComponent.length}
													type="button"
													onClick={() => setVisibleBlogs((prev) => prev + 7)}
											>
											<RiArrowDropDownLine className="icon__Ri"/>
											</Link>
										</div>
									</div>
								    <button className="Video__btn">
								    	<span><IoIosShareAlt className="Video__btn__icon"/></span>
								    	<strong>9999</strong>
								    </button>
							    </div>
							</div>
						</div>
				   </div>
				   <button className="VideoTopTop__btn">Follow</button>

			   </div>
			</div>
			))}
		</div>
	);
}
export default VideoTopTop;